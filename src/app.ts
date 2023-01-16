import express from 'express';
import routes from './routes'
import dbInit from './db/init'
const app = express();
const port = 3000;
dbInit()

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes)

app.get('/', async(req: express.Request, res: express.Response) => {
  return res.status(200).send({ message: `Welcome to the product CRUD App` })

})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
