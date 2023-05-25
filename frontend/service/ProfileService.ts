const getAllProfiles = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profiles', {
        method: 'GET'
    })
}

const getProfile = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profiles/{id}', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 'id'
            })
    })
}

const createProfile = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profiles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'name',
                biography: 'biography'
            })
    })
}

const updateProfile = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profiles/{id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'name',
                biography: 'biography'
            })
    })
}

const deleteProfile = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profiles/{id}', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 'id'
            })
    })
}

const ProfileService = {
    getAllProfiles,
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
}

export default ProfileService;