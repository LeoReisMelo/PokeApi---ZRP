import express, { Request, Response, Express, RequestHandler } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

dotenv.config()
export class Server {
  private readonly app: Express

  constructor() {
    this.app = express()
    this.app.use(cors())
    this.app.use(helmet())
    this.app.use(express.json())
  }

  init(
    routes: Array<{
      path: string
      method: string
      middlewares: Array<RequestHandler>
      description?: string
      handler: RequestHandler
    }> = [],
  ) {
    routes.forEach((route) => {
      const middlewares = route.middlewares || []

      // @ts-ignore
      this.app[route.method.toLocaleLowerCase()](
        route.path,
        middlewares,
        route.handler,
      )
    })

    this.app.all('*', (_: Request, res: Response) => res.sendStatus(404))

    const server = this.app.listen(process.env.PORT || 3333, () =>
      console.log('Application is running on port 3333'),
    )

    return { app: this.app, server }
  }
}
