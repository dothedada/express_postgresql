import { lookForUser } from '../db/queries.js';

export const lookFor = async (req, res, next) => {
    const { q } = req.query;
    const users = await lookForUser(q);
    res.found = users;
    next();
};
