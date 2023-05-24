import { Task } from "../model/task";
import "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { mapToTasks, mapToTask } from "./task.mapper";

const prisma = new PrismaClient();

const getAllTasks = async (): Promise<Task[]> => {
    try {
        const taskPrisma = await prisma.task.findMany({})
        return mapToTasks(taskPrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

const getTask = async ({id}): Promise<Task> => {
    try {
        const taskPrisma = await prisma.task.findUnique({where:{id:parseInt(id)}})
        return mapToTask(taskPrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

const createTask = async ({title, description, deadline, userId}): Promise<Task> => {
    try {
        const taskPrisma = await prisma.task.create({
        data:{
            title: title,
            description: description,
            deadline: deadline,
            userId: userId,
        }})
        return mapToTask(taskPrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

const deleteTask = async ({id}): Promise<Task> => {
    try {
        const taskPrisma = await prisma.task.delete({
            where: {
                id: id
            }
        })
        return mapToTask(taskPrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

const updateTask = async (id,{ title, description, deadline, userId}): Promise<Task> => {
    try {
        const taskPrisma = await prisma.task.update({
            where: {
                id: id
            },
            data:{
                title: title,
                description: description,
                deadline: deadline,
                userId: userId,
            }
        })
        return mapToTask(taskPrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

export default {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}