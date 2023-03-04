import { User } from "../model/user";

const users: User[] = [
    User.constructor({ email: 'lien.kempeneers@student.ucll.be', password: '1234' })
];

const getAllUsers = () => users;

const getUserByEmail = (email: string) => users.find(user => user.email === email);

export default { 
    getAllUsers, 
    getUserByEmail 
};