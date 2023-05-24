const getAllUsers = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users')
}

const getUser = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users/{id}')
}

const createUser = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users')
}

const updateUser = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users/{id}')
}

const deleteUser = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users/{id}')
}

const UserService = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}

export default UserService;