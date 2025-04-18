import { Router } from 'express';
import { newUsername } from '../controllers/new_username.js';

const newRouter = Router();

newRouter.get('/', (req, res) => {
    res.render('form', { title: 'new', data: { action: '/new' } });
});

newRouter.post('/', newUsername, (req, res) => {
    res.redirect('/');
});

export { newRouter };
