const getAllUsers = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/user/', {
        method: 'GET'
    })
}

const getUser = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/user/{id}', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 'id'
            })
    })
}

const createUser = (name:string, email:string, password: string) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/user/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: name,
                password: password,
                email: email
            })
        })
}

const updateUser = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/user/{id}', {
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
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/user/{id}', {
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