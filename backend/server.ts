import cors from 'cors';
import express, { Router } from 'express';
import compression from 'compression';
import methodOverride from 'method-override';
import chatgptRoute from './chatgpt/route';

const app = express();
const port = 8000;

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride());
app.use(cors());
app.use('/', chatgptRoute);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})