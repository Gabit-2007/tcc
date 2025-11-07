import express from 'express';
import bodyParser from 'body-parser';
import router from './rotas.js';

let app = express();
let port = 5010;

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
