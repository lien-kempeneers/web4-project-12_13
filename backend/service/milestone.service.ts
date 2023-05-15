import {Milestone} from '../domain/model/milestone';
import MilestoneDB from '../domain/data-access/milestone.db';
import {MilestoneInput} from '../types/types';

const getAllMilestones = async (): Promise<Milestone[]> => {
    return await MilestoneDB.getAllMilestones();
};

const getMilestone = async ({id}: MilestoneInput): Promise<Milestone> => {
    if(!id || Number.isNaN(Number(id))){
        throw new Error('Id is invalid');
    }
    return await MilestoneDB.getMilestone({id: parseInt(id)});
}

const createMilestone = async ({id, title, description, deadline, taskId}:Milestone): Promise<Milestone> => {
    if(title.length == 0){
        throw new Error('Title can\'t be empty');
    }
    if(description.length == 0){
        throw new Error('Description can\'t be empty');
    }
    if(!deadline){
        throw new Error('Deadline can\'t be empty');
    }
    if(!id || Number.isNaN(Number(id))){
        throw new Error('Id is invalid');
    }
    return await MilestoneDB.createMilestone({
        title:title,
        description:description,
        deadline:deadline,
        taskId:taskId
    })
};
const updateMilestone = async ({id, title, description, deadline, taskId}:Milestone): Promise<Milestone> => {
    
    const milestone = await getMilestone({id:id});
    if(!milestone){
        throw new Error('Milestone doesn\'t exist');
    }
    if(title.length == 0){
        throw new Error('Title can\'t be empty');
    }
    if(description.length == 0){
        throw new Error('Description can\'t be empty');
    }
    if(!deadline){
        throw new Error('Deadline can\'t be empty');
    }
    if(!taskId || Number.isNaN(Number(taskId))){
        throw new Error('taskId is invalid');
    }
    return await MilestoneDB.updateMilestone({
        id: id,
        title:title,
        description:description,
        deadline:deadline,
        taskId:taskId
    })
};

const deleteMilestone = async ({String: id}): Promise<Milestone> => {
    
    const milestone = await getMilestone({id:id});
    if(!milestone){
        throw new Error('Milestone doesn\'t exist');
    }
    return await MilestoneDB.deleteMilestone({
        id:id,
    })
};

export default {
    getAllMilestones,
    getMilestone,
    createMilestone,
    updateMilestone,
    deleteMilestone
};
