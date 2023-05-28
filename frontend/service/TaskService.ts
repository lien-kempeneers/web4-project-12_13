const getAllTasks = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/task/', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

const getTask = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/task/{id}', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        
            },
            body: JSON.stringify({
                id: 'id'
            })
    })
}

const createTask = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/task/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            ,
            Authorization: `Bearer ${token}`
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
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/task/{id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                title: 'title',
                description: 'description',
                deadline: 'deadline',
                userId: 'userId'
            })
    })
}

const deleteTask = (id:number) => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+`/task/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
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