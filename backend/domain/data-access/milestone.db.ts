import { Milestone } from "../model/milestone";
import "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { mapToMilestones, mapToMilestone } from "./milestone.mapper";

const prisma = new PrismaClient();

const getAllMilestones = async (): Promise<Milestone[]> => {
    try{
        const milestonePrisma = await prisma.milestone.findMany({})
        return mapToMilestones(milestonePrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")

    }
}

const getMilestone = async ({id}): Promise<Milestone> => {
    try {
        const milestonePrisma = await prisma.milestone.findUnique({
            where: {
                id: id
            }
        })
        return mapToMilestone(milestonePrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

const createMilestone = async ({
    title, 
    description, 
    deadline, 
    taskId
    } : {
        title: string,
        description: string,
        deadline: Date,
        taskId: number
    }): Promise<Milestone> => {
    try{
        const milestonePrisma = await prisma.milestone.create({
        data:{
            title,
            description,
            deadline,
            taskId}});
        return mapToMilestone(milestonePrisma);
    }catch (error){
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

const deleteMilestone = async ({id}): Promise<Milestone> => {
    try{
        const milestonePrisma = await prisma.milestone.delete({
            where: {
                id: id
            }
        })
        return mapToMilestone(milestonePrisma);
    }catch (error){
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

const updateMilestone = async (id,{ title, description, deadline, taskId}): Promise<Milestone> => {
    try{
        const milestonePrisma = await prisma.milestone.update({
            where: {
                id: id
            },
            data: {
                title: title,
                description: description,
                deadline: deadline,
                taskId: taskId
            }
        })
        return mapToMilestone(milestonePrisma);
    }catch (error){
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

export default {
    getAllMilestones,
    getMilestone,
    createMilestone,
    deleteMilestone,
    updateMilestone,
};