import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// corpo (Request Body): Dados para a criação ou atualização de um registro
// Route params: Indentificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtração, ordenação



app.listen(3333);
