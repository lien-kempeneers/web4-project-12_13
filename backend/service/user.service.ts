import {User} from '../domain/model/user';
import UserDB from '../domain/data-access/user.db';

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

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
