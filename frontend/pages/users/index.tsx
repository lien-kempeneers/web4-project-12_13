import { useEffect, useState } from "react"
import UserService from "../../service/UserService"
import Header from "../../components/Header"
import UserOverviewTable from "../../components/users/UserOverviewTable"
import AddUserForm from "../../components/users/AddUserForm"
import { User } from "../../types"
import Head from "next/head"
import Link from "next/link"


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
            <Head>
                <title>Users</title>
            </Head>
            <main > 
                <Header></Header>
                <UserOverviewTable users={users}></UserOverviewTable>
                <AddUserForm></AddUserForm>
            </main>
        </>
    )
}

export default Users