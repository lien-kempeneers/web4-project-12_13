const getAllMilestones = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users')
}

const MilestoneService = {
    getAllMilestones
}

export default MilestoneService;