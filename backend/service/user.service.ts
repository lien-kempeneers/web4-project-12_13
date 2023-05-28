import {User} from '../domain/model/user';
import UserDB from '../domain/data-access/user.db';
import jwt from 'jsonwebtoken';
import { error } from 'console';

const getAllUsers = async (): Promise<User[]> => {
    return await UserDB.getAllUsers();
}

const getUser = async (email): Promise<User> => {
    if(!email || email == ""){
        throw new Error('Email is invalid');
    }
    return await UserDB.getUser({email});
}


const createUser = async (userInput:User): Promise<User> => {
    if(userInput.username.length == 0){
        throw new Error('Username can\'t be empty');
    }
    if(userInput.email.length == 0){
        throw new Error('Email can\'t be empty');
    }
    const existingUser = await UserDB.getUserByEmail({email:userInput.email});
    if(existingUser){
        throw new Error(`User with email adres ${userInput.email} already exists`);
    }
    if(userInput.password.length == 0){
        throw new Error('Password can\'t be empty');
    }
    
    const hashedPassword = await bcrypt.hash(userInput.password, 12);
    return await UserDB.createUser({
        username:userInput.username,
        email:userInput.email,
        password:hashedPassword
    })
};

const updateUser = async (id,{username, email, password}:User): Promise<User> => {
    
    const user = await getUser(id);
    if(!user){
        throw new Error('User doesn\'t exist');
    }
    if(username.length == 0){
        throw new Error('Username can\'t be empty');
    }
    if(email.length == 0){
        throw new Error('Email can\'t be empty');
    }
    const existingUser = await UserDB.getUserByEmail({email:email});
    if(existingUser && existingUser.id != id){
        throw new Error(`User with email adres ${email} already exists`);
    }
    if(password.length == 0){
        throw new Error('Password can\'t be empty');
    }
    return await UserDB.updateUser(id,{
        username:username,
        email:email,
        password:password
    })
};

const deleteUser = async (id): Promise<User> => {
    const user = await getUser(id);
    if(!user){
        throw new Error('User doesn\'t exist');
    }
    return await UserDB.deleteUser({
        id:id,
    })
};

const jwtSecret = process.env.JWT_SECRET;

const generateJwtToken = (email: string): string => {
    const options = { expiresIn: `${process.env.JWT_EXPIRATION_TIME}h`, issuer: '' };

    try{
        return jwt.sign({ email }, jwtSecret, options);
    } catch (err) {
        console.log(err.toString());
        throw new Error('Error while generating JWT token');
    }
};

const bcrypt = require('bcrypt');


const authenticate = async ({ email, password}: User): Promise<string> => {
    console.log(email, password);
    const user = await getUser(email);
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new Error('Invalid password');
    }
    console.log("authorised")
    return generateJwtToken(user.email);
};

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    authenticate
};

