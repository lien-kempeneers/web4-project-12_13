import { Profile } from "../domain/model/profile";
import * as profileDB from "../domain/data-access/profile.db";

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