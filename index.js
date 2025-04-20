import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import { indexRouter } from './routes/index_route.js';
import { newRouter } from './routes/new_route.js';
import { delRouter } from './routes/delete_route.js';
import { updateRouter } from './routes/update_route.js';
import { getId } from './middlewares/getID.js';
import { searchRouter } from './routes/search_route.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/:id/delete', getId, delRouter);
app.use('/:id/update', getId, updateRouter);
app.use('/search', searchRouter);

app.listen(PORT, () => {
    console.log('ON AIR at port', PORT);
});
