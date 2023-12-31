import { Profile } from "../domain/model/profile";
import profileDB from "../domain/data-access/profile.db";
import { profile } from "console";


const getAllProfiles = async (): Promise<Profile[]> => {
    return await profileDB.getAllProfiles();
}

const getProfile = async (id): Promise<Profile> => {
    if(!id || Number.isNaN(Number(id))){
        throw new Error('Id is invalid');
    }
    return await profileDB.getProfile({id:id});
}

const createProfile = async ({name, biography}:Profile): Promise<Profile> => {
    if(name.length == 0){
        throw new Error('Name can\'t be empty');
    }
    if(biography.length == 0){
        throw new Error('Biography can\'t be empty');
    }
    return await profileDB.createProfile({
        name:name,
        biography:biography
    })
};

const updateProfile = async (id, { name, biography}:Profile): Promise<Profile> => {
    
    const profile = await getProfile(id);
    if(!profile){
        throw new Error('Profile doesn\'t exist');
    }
    if(name.length == 0){
        throw new Error('Name can\'t be empty');
    }
    if(biography.length == 0){
        throw new Error('Biography can\'t be empty');
    }
    return await profileDB.updateProfile(id,{
        name:name,
        biography:biography
    })
};

const deleteProfile = async ( id): Promise<Profile> => {
    
    const profile = await getProfile(id);
    if(!profile){
        throw new Error('Profile doesn\'t exist');
    }
    return await profileDB.deleteProfile({
        id:id,
    })
};


export default {
    createProfile,
    deleteProfile,
    updateProfile,
    getProfile,
    getAllProfiles
};