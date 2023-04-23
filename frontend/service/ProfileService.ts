const getAllProfiles = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users')
}

const ProfileService = {
    getAllProfiles
}

export default ProfileService;