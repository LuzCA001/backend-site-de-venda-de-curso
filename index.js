import express from 'express';
import cursoRouter from './Routes/rotaCurso.js';
import cors from 'cors';

const hostname = '0.0.0.0';
const porta = 4000;

const app = express();


app.use(cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: ["Content-Type", 'Autorization']
}));

app.use(express.json());
app.use('/cursos', cursoRouter);

app.listen(porta, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${porta}`);
});

