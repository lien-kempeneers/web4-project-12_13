const getAllUsers = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/users')
}

const UserService = {
    getAllUsers,
}

export default UserService;