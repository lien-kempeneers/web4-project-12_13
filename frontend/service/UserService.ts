const getAllUsers = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users', {
        method: 'GET'
    })
}

const getUser = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users/{id}', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 'id'
            })
    })
}

const createUser = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'username',
                password: 'password',
                email: 'email'
            })
        })
}

const updateUser = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users/{id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'username',
                password: 'password',
                email: 'email'
            })
    })
}

const deleteUser = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users/{id}', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 'id'
            })
    })
}

const UserService = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}

export default UserService;