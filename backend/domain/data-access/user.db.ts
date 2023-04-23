import { User } from "../model/user";
import "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { mapToUsers, mapToUser } from "./user.mapper";

const prisma = new PrismaClient();

const getAllUsers = async (): Promise<User[]> => {
    try{
        const userPrisma = await prisma.user.findMany({})
        return mapToUsers(userPrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

const getUser = async ({id}): Promise<User> => {
    try{
        const userPrisma = await prisma.user.findUnique({where:{id:id}})
        return mapToUser(userPrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

const createUser = async ({username, email, password}): Promise<User> => {
    try{
        const userPrisma = await prisma.user.create({
        data:{
            username: username,
            email: email,
            password: password,
        }})
        return mapToUser(userPrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

const deleteUser = async ({id}): Promise<User> => {
    try{
        const userPrisma = await prisma.user.delete({
            where: {
                id: id
            }
        })
        return mapToUser(userPrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

const updateUser = async ({id, email, password}): Promise<User> => {
    try{
        const userPrisma = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                email: email,
                password: password,
            }
        })
        return mapToUser(userPrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

export default { 
    getAllUsers, 
    getUser,
    createUser,
    deleteUser,
    updateUser,
};