import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import { newRouter } from './routes/new_route.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'WIP',
        content: 'users will be logged here - wip',
    });
});

app.use('/new', newRouter);

app.listen(PORT, () => {
    console.log('ON AIR at port', PORT);
});
