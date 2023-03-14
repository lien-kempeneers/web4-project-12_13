import { Profile } from "../model/profile";
import "@prisma/client";
import { PrismaClient } from "@prisma/client";
import {mapToProfiles, mapToProfile} from "../data-access/profile.mapper";

const prisma = new PrismaClient();


export const getAllProfiles = async (): Promise<Profile[]> => {
    try {
        const profilePrisma = await prisma.profile.findMany({})
        return mapToProfiles(profilePrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

export const getProfile = async ({id}): Promise<Profile> => {
    try {
        const profilePrisma = await prisma.profile.findUnique({where:{id:id}})
        return mapToProfile(profilePrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

export const createProfile = async ({name, biography}): Promise<Profile> => {
    try {
        const profilePrisma = await prisma.profile.create({
        data:{
            name: name,
            biography: biography,
        }})
        return mapToProfile(profilePrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

export const deleteProfile = async ({id}): Promise<Profile> => {
    try {
        const profilePrisma = await prisma.profile.delete({
            where: {
                id: id
            }
        })
        return mapToProfile(profilePrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

export const upsertProfile = async ({id, name, biography}): Promise<Profile> => {
    try {
        const profilePrisma = await prisma.profile.upsert({
            where: {
                id: id,
            },
            update: {
                name: name,
                biography: biography,
            },
            create: {
                name: name,
                biography: biography,
            }
        })
        return mapToProfile(profilePrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}

export const updateProfile = async ({id, name, biography}): Promise<Profile> => {
    try {
        const profilePrisma = await prisma.profile.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                biography: biography,
            },
        })
        return mapToProfile(profilePrisma);
    } catch (error) {
        console.error(error);
        throw new Error("Database error. See server log for details.")
    }
}