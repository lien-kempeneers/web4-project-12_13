import { useEffect, useState } from "react"
import UserService from "../../service/UserService"
import Header from "../../components/Header"
import UserOverviewTable from "../../components/users/UserOverviewTable"
import { User } from "../../types"
import { get } from "http"


const Users : React.FC = () => {
    //const users = [{"username":"test","password":"test"},{"username":"test2","password":"test2"}]

    const [users, setUsers] = useState<Array<User>>([])

    const getUsers = async () => {
        UserService.getAllUsers().
            then((jsonusers) => jsonusers.json()).
                then((arrayusers) => setUsers(arrayusers)) 
    }

    useEffect(() => {getUsers()}, [])

    return (
        <>
            <head>
                <title>Users</title>
            </head>
            <Header></Header>
            <main> 
                <UserOverviewTable users={users}></UserOverviewTable>
            </main>
        </>
    )
}

export default Users