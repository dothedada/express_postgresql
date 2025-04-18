import { Router } from 'express';
import { getUserData, updateUsername } from '../controllers/update_username.js';

const updateRouter = new Router();

updateRouter.get('/', getUserData, (req, res) => {
    res.render('form', {
        title: 'update',
        data: {
            action: `/${req.userData.id}/update`,
            username: req.userData.username,
        },
    });
});

updateRouter.post('/', updateUsername, (req, res) => {
    res.redirect('/');
});

export { updateRouter };
