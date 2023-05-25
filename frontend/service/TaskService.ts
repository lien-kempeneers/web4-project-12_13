const getAllTasks = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/tasks', {
        method: 'GET'
    })
}

const getTask = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/tasks/{id}', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 'id'
            })
    })
}

const createTask = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'title',
                description: 'description',
                deadline: 'deadline',
                userId: 'userId'
            })
    })
}

const updateTask = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/tasks/{id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'title',
                description: 'description',
                deadline: 'deadline',
                userId: 'userId'
            })
    })
}

const deleteTask = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/tasks/{id}', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 'id'
            })
    })
}

const TaskService = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}

export default TaskService;