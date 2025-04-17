import { Router } from 'express';
import { getUsernames } from '../controllers/read_usernames.js';

const indexRouter = Router();

indexRouter.get('/', getUsernames, (req, res) => {
    res.render('index', {
        title: 'WIP',
        usernames: res.usernames,
    });
});

export { indexRouter };
