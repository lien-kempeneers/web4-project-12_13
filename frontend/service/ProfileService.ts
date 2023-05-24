const getAllProfiles = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profiles')
}

const getProfile = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profiles/{id}')
}

const createProfile = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profiles')
}

const updateProfile = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profiles/{id}')
}

const deleteProfile = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profiles/{id}')
}

const ProfileService = {
    getAllProfiles,
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
}

export default ProfileService;