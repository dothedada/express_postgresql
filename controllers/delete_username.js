import { deleteUsername } from '../db/queries.js';

const removeUsername = (req, _, next) => {
    const id = req.userID;
    deleteUsername(id);
    next();
};

export { removeUsername };
