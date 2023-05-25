const getAllMilestones = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestones', {
        method: 'GET'
    })
}

const getMilestone = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestones/{id}', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 'id'
        })
    })
}

const createMilestone = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestones', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestones/{id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
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
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestones/{id}', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
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