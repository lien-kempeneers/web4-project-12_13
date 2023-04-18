import {User} from '../domain/model/user';
import UserDB from '../domain/data-access/user.db';

const getAllUsers = () => UserDB.getAllUsers();

const getUserByEmail = (email: string) => UserDB.getUserByEmail(email);

const addUser = (user: User) => UserDB.addUser(user);

const updateUser = (user: User) => UserDB.updateUser(user);

export default {
    getAllUsers,
    getUserByEmail,
    addUser,
    updateUser
};
