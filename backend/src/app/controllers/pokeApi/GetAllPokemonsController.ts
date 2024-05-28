import { Controller } from '../Controller'
import { Request, Response } from 'express'
import { ListAllPokemonsUseCase } from '~/app/useCases/pokeApi/GetAllPokemonsUseCase'
import { ErrorHandler } from '~/helpers/errorHandler'
import { PokeApi } from '~/infrastructure/services/Pokeapi'

export class ListAllPokemons implements Controller {
  constructor() {}

  async handle(request: Request, response: Response) {
    try {
      const { page } = request.params
      const { limit } = request.query

      if (isNaN(Number(page)) || !Number(limit)) {
        throw new ErrorHandler(400, 'Invalid parameters')
      }

      const pokeApiService = new PokeApi()
      const listAllPokemonsUseCase = new ListAllPokemonsUseCase(pokeApiService)

      const pokemons = await listAllPokemonsUseCase.execute(
        Number(page),
        Number(limit),
      )

      response.status(200).json(pokemons)
    } catch (error: any) {
      console.error({ error })

      if (error instanceof ErrorHandler) {
        response.status(error.statusCode).json({ error: error.message })
      } else {
        console.error('Unexpected error:', error)
        response.status(500).json({ error: 'Internal server error' })
      }
    }
  }
}
