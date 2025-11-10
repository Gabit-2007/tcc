import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import router from './rotas.js';

let app = express();
let port = 5010;

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(bodyParser.json());
app.use(router);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
