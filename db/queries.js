import { newPool } from './pool.cjs';

const getAllUsernames = async () => {
    const { rows } = await newPool.query('SELECT * FROM usernames');
    return rows;
};

const getUser = async (id) => {
    const { rows } = await newPool.query(
        'SELECT * FROM usernames WHERE id = $1',
        [id],
    );
    return rows;
};

const insertUsername = async (username) => {
    await newPool.query('INSERT INTO usernames (username) VALUES ($1)', [
        username,
    ]);
};

const deleteUsername = async (id) => {
    await newPool.query('DELETE FROM usernames WHERE id = $1', [id]);
};

const putUsername = async (id, newName) => {
    await newPool.query('UPDATE usernames SET username = $1 WHERE id = $2', [
        newName,
        id,
    ]);
};

export {
    getAllUsernames,
    getUser,
    insertUsername,
    deleteUsername,
    putUsername,
};
