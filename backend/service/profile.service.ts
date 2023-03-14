import { Profile } from "../domain/model/profile";
import * as profileDB from "../domain/data-access/profile.db";
import { profile } from "console";

const addProfile = async ({name, biography}:Profile): Promise<Profile> => {
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

const deleteProfile = async ({id}:Profile): Promise<Profile> => {
    if(!id || Number.isNaN(Number(id))){
        throw new Error('Id is invalid');
    }
    const profile = await profileDB.getProfile({id:id});
    if(!profile){
        throw new Error('Profile doesn\'t exist');
    }
    return await profileDB.deleteProfile({
        id:id,
    })
};

const updateProfile = async ({id, name, biography}:Profile): Promise<Profile> => {
    if(!id || Number.isNaN(Number(id))){
        throw new Error('Id is invalid');
    }
    if(name.length == 0){
        throw new Error('Name can\'t be empty');
    }
    if(biography.length == 0){
        throw new Error('Biography can\'t be empty');
    }
    return await profileDB.updateProfile({
        id: id,
        name:name,
        biography:biography
    })
};

const upsertProfile = async ({id, name, biography}:Profile): Promise<Profile> => {
    if(!id || Number.isNaN(Number(id))){
        throw new Error('Id is invalid');
    }
    if(name.length == 0){
        throw new Error('Name can\'t be empty');
    }
    if(biography.length == 0){
        throw new Error('Biography can\'t be empty');
    }
    return await profileDB.upsertProfile({
        id: id,
        name:name,
        biography:biography
    })
};