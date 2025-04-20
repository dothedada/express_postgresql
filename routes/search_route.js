import { Router } from 'express';
import { lookFor } from '../controllers/lookFor_username.js';

const searchRouter = Router();

searchRouter.get('/', lookFor, (req, res) => {
    res.send(res.found);
});

export { searchRouter };
