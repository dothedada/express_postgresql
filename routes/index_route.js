import { Router } from 'express';
import { getUsernames } from '../controllers/read_usernames.js';

const indexRouter = Router();

indexRouter.get('/', getUsernames, (req, res) => {
    res.render('index', {
        title: res.search
            ? `búsqueda de usuarios por ${res.search}`
            : 'usuarios',
        usernames: res.usernames,
        searchParam: res.search,
        search: !!res.search,
    });
});

export { indexRouter };
