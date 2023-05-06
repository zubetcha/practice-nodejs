import * as express from 'express';
import catsRouter from './cats/cats.route';

const app: express.Express = express();
const port: number = 8080;

const mockData = [1, 2, 3, 4];

//* singleton 패턴
class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    app.use(catsRouter);
  }

  private setMiddleware() {
    //* loggin middleware
    app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log('this is logging middleware!!');

      // 다음 라우터 실행
      next();
    });

    //* json-parser middleware
    app.use(express.json());

    this.setRoute();

    //* 404 middleware
    app.use((req, res, next) => {
      res.send({ error: '404 not found error' });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
