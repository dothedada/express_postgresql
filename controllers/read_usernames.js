import { getAllUsernames, lookForUser } from '../db/queries.js';

const getUsernames = async (req, res, next) => {
    const { search } = req.query;
    const users = await (search ? lookForUser(search) : getAllUsernames());
    const searchList = !!search;

    res.usernames = users;
    res.search = search;

    next();
};

export { getUsernames };
