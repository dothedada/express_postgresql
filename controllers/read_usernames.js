import { getAllUsernames } from '../db/queries.js';

const getUsernames = async (req, res, next) => {
    const usernames = await getAllUsernames();
    res.usernames = usernames;
    next();
};

export { getUsernames };
