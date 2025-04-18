import { insertUsername } from '../db/queries.js';

const newUsername = async (req, res, next) => {
    const username = req.body.name;
    insertUsername(username);
    next();
};

export { newUsername };
