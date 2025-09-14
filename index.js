import express from 'express';
import cursoRouter from './Routes/rotaCurso.js';

const hostname = '0.0.0.0';
const porta = 4000;

const app = express();

app.use(express.json());

app.use('/cursos', cursoRouter);

app.listen(porta, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${porta}`);
});

