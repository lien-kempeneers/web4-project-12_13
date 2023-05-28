const getAllProfiles = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profile/', {
        method: 'GET', headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
}

const getProfile = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profile/{id}', {
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

const createProfile = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profile/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                name: 'name',
                biography: 'biography'
            })
    })
}

const updateProfile = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profile/{id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                name: 'name',
                biography: 'biography'
            })
    })
}

const deleteProfile = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/profile/{id}', {
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

const ProfileService = {
    getAllProfiles,
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
}

export default ProfileService;