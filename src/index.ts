import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    return res.send('Teste Frontend');
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log('API Rodando na Porta 3333');
});