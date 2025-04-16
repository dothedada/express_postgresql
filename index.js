import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('users will be logged here - wip');
});
app.get('/new', (req, res) => {
    res.send('new users form will be logged here - wip');
});
app.post('/new', (req, res) => {
    res.send(`username to be saved: ${req.body.username}`);
});

app.listen(PORT, () => {
    console.log('ON AIR at port', PORT);
});
