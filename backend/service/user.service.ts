import {User} from '../domain/model/user';
import UserDB from '../domain/data-access/user.db';

const getAllUsers = () => UserDB.getAllUsers();

const getUserByEmail = (email: string) => UserDB.getUserByEmail(email);

export default {
    getAllUsers,
    getUserByEmail
};
