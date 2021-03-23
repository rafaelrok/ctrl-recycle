//Express utilizado para efetuar a manipulação de rotas  pelo navegador 
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Server is running')); 

