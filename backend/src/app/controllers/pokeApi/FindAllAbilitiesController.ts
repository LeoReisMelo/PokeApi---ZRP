import { FindAllAbilitiesUseCase } from '~/app/useCases/pokeApi/FindAllAbilitiesUseCase'
import { Controller } from '../Controller'
import { Request, Response } from 'express'
import { ErrorHandler } from '~/helpers/errorHandler'
import { PokeApi } from '~/infrastructure/services/Pokeapi'

export class FindAllAbilities implements Controller {
  constructor() {}

  async handle(_request: Request, response: Response) {
    try {
      const pokeApiService = new PokeApi()
      const findAllAbilities = new FindAllAbilitiesUseCase(pokeApiService)

      const result = await findAllAbilities.execute()

      response.status(200).json(result)
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
