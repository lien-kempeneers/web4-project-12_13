import LoginService from "./LoginService"

const getAllUsers = () => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/user/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
}

const getUser = (id:number) => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+`/user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
            },
    })
}

const getUserByEmail = (email:String) => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/user/byemail/{email}', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                email: email
            })
    })
}

const createUser = (name:string, email:string, password: string) => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                username: name,
                password: password,
                email: email
            })
        }).then((response)=>{return response
        })
}

const updateUser = (id: number, username:string, password:string, email:string) => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL+`/user/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            })
    })
}

const deleteUser = (id: number) => {
    const token = sessionStorage.getItem("token")
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/user/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                email: 'email'
            })
    })
}

const UserService = {
    getAllUsers,
    getUser,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
}

export default UserService;