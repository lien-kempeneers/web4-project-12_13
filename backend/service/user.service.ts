import {User} from '../domain/model/user';
import UserDB from '../domain/data-access/user.db';
import jwt from 'jsonwebtoken';
import { error } from 'console';

const getAllUsers = async (): Promise<User[]> => {
    return await UserDB.getAllUsers();
}

const getUser = async ({id: id}): Promise<User> => {
    if(!id || Number.isNaN(Number(id))){
        throw new Error('Id is invalid');
    }
    return await UserDB.getUser({id:id});
}


const createUser = async ({id, username, email, password}:User): Promise<User> => {
    if(!id || Number.isNaN(Number(id))){
        throw new Error('Id can\'t be set');
    }
    if(username.length == 0){
        throw new Error('Username can\'t be empty');
    }
    if(email.length == 0){
        throw new Error('Email can\'t be empty');
    }
    if(password.length == 0){
        throw new Error('Password can\'t be empty');
    }
    const existingUser = await UserDB.getUser({id:id});
    if(existingUser){
        throw new Error(`User with username ${username} already exists`);
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    return await UserDB.createUser({
        username:username,
        email:email,
        password:password
    })
};

const updateUser = async ({id, email, password}:User): Promise<User> => {
    
    const user = await getUser({id:id});
    if(!user){
        throw new Error('User doesn\'t exist');
    }
    if(email.length == 0){
        throw new Error('Email can\'t be empty');
    }
    if(password.length == 0){
        throw new Error('Password can\'t be empty');
    }
    return await UserDB.updateUser({
        id: id,
        email:email,
        password:password
    })
};

const deleteUser = async ({String: id}): Promise<User> => {
    
    const user = await getUser({id:id});
    if(!user){
        throw new Error('User doesn\'t exist');
    }
    return await UserDB.deleteUser({
        id:id,
    })
};

const jwtSecret = process.env.JWT_SECRET;

const generateJwtToken = (username: string): string => {
    const options = { expiresIn: `${process.env.JWT_EXPIRATION_TIME}h`, issuer: '' };

    try{
        return jwt.sign({ username }, jwtSecret, options);
    } catch (err) {
        console.log(error);
        throw new Error('Error while generating JWT token');
    }
};

const bcrypt = require('bcrypt');


const authenticate = async ({ id, password}: User): Promise<string> => {
    const user = await getUser({id});
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new Error('Invalid password');
    }
    return generateJwtToken(user.username);
};

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    authenticate
};

