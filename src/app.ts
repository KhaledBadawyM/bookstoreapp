import express from 'express';
import routes from './routes'
import dbInit from './db/init'
import cors from 'cors'
const app = express();
dbInit()

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// app.use(express.json());
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes)

app.get('/', async(req: express.Request, res: express.Response) => {
  res.render('login.html');

})

app.listen(process.env.PORT, () => {
  return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});
