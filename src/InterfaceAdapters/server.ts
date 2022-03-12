import * as bodyParser from 'body-parser';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import * as http from 'http';
import { UsersController } from './controllers/users/users.controller';

export interface Controllers {
  users: UsersController;
}

export class HttpServer {
  private readonly app: express.Express;
  private readonly router: express.Router;
  private server: http.Server;

  constructor(controllers: Controllers) {
    this.app = express();

    this.router = express.Router();

    this.router.get('/', (_, res) => res.send({ data: 'ok' }));

    this.router.get(
      '/users',
      this.toHandler((req) => controllers.users.getUsers(req)),
    );

    this.app.use(this.router);
    this.app.use(bodyParser.json());
    this.app.use(HttpServer.handleError);
  }

  public async start(port: number) {
    this.server = this.app.listen(port, () =>
      console.log(`The server has started on ${port}`),
    );
  }

  private toHandler(fn: (req: Request) => Promise<any>) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await fn(req);
        res.json(result);
      } catch (e) {
        next(e);
      }
    };
  }

  private static handleError(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    res.status(500).json({ message: err.message });
  }
}
