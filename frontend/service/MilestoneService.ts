const getAllMilestones = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestone', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
}

const getMilestone = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestone/{id}', {
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

const createMilestone = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestone', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            title: 'title',
            description: 'description',
            deadline: 'deadline',
            taskId: 'taskId'
        })
    })
}

const updateMilestone = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestone/{id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                title: 'title',
                description: 'description',
                deadline: 'deadline',
                taskId: 'taskId'
            })
        })
}

const deleteMilestone = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestone/{id}', {
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

const MilestoneService = {
    getAllMilestones,
    getMilestone,
    createMilestone,
    updateMilestone,
    deleteMilestone
}

export default MilestoneService;