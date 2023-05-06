import * as express from 'express';
import catsRouter from './cats/cats.route';

const app: express.Express = express();
const port: number = 8080;

const mockData = [1, 2, 3, 4];

//* loggin middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('this is logging middleware!!');

  // 다음 라우터 실행
  next();
});

//* json-parser middleware
app.use(express.json());

app.use(catsRouter);

//* 404 middleware
app.use((req, res, next) => {
  res.send({ error: '404 not found error' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
