import { Router } from 'express';
import { removeUsername } from '../controllers/delete_username.js';

const delRouter = new Router();

delRouter.get('/', removeUsername, (req, res) => {
    res.redirect('/');
});

export { delRouter };
