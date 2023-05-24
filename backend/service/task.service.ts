import {Task} from '../domain/model/task';
import TaskDB from '../domain/data-access/task.db';

const getAllTasks = async (): Promise<Task[]> => {
    return await TaskDB.getAllTasks();
}


const getTask = async (id): Promise<Task> => {
    if(!id || Number.isNaN(Number(id))){
        throw new Error('Id is invalid');
    }
    return await TaskDB.getTask({id});
}


const createTask = async ({title, description, deadline, userId}:Task): Promise<Task> => {
    if(title.length == 0){
        throw new Error('Title can\'t be empty');
    }
    if(description.length == 0){
        throw new Error('Description can\'t be empty');
    }
    if(!deadline){
        throw new Error('Deadline can\'t be empty');
    }
    return await TaskDB.createTask({
        title:title,
        description:description,
        deadline:deadline,
        userId:userId
    })
};

const updateTask = async (id, {title, description, deadline, userId}:Task): Promise<Task> => {
    
    const task = await getTask(id);
    if(!task){
        throw new Error('Task doesn\'t exist');
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
    if (!userId){
        throw new Error('UserId can\'t be empty');
    }
    return await TaskDB.updateTask(id,{
        title: title,
        description:description,
        deadline:deadline,
        userId:userId
    })
};
const deleteTask = async (id): Promise<Task> => {
    
    const task = await getTask(id);
    if(!task){
        throw new Error('Task doesn\'t exist');
    }
    return await TaskDB.deleteTask({
        id:id,
    })
};
export default {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};
