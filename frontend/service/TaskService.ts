const getAllTasks = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/tasks')
}

const getTask = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/tasks/{id}')
}

const createTask = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/tasks')
}

const updateTask = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/tasks/{id}')
}

const deleteTask = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/tasks/{id}')
}

const TaskService = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}

export default TaskService;