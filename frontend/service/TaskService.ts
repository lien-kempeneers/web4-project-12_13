const getAllTasks = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users')
}

const TaskService = {
    getAllTasks
}

export default TaskService;