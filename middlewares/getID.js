export const getId = (req, _, next) => {
    req.userID = req.params.id;
    next();
};
