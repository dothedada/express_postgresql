import { Router } from 'express';

const newRouter = Router();

newRouter.get('/', (req, res) => {
    res.send('new users form will be logged here - wip');
});

newRouter.post('/', (req, res) => {
    res.send(`username to be saved: ${req.body.username}`);
});

export { newRouter };
