const getAllMilestones = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestones')
}

const getMilestone = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestones/{id}')
}

const createMilestone = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestones')
}

const updateMilestone = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestones/{id}')
}

const deleteMilestone = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/milestones/{id}')
}

const MilestoneService = {
    getAllMilestones,
    getMilestone,
    createMilestone,
    updateMilestone,
    deleteMilestone
}

export default MilestoneService;