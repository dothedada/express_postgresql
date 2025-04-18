import { getUser, putUsername } from '../db/queries.js';

export const getUserData = async (req, res, next) => {
    const id = req.userID;
    const data = await getUser(id);
    console.log(data);
    req.userData = data[0];
    next();
};

export const updateUsername = (req, res, next) => {
    const name = req.body.name;
    putUsername(req.userID, name);
    next();
};
