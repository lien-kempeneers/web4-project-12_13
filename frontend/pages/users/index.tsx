import { useEffect, useState } from "react"
import UserService from "../../service/UserService"
import Header from "../../components/Header"
import UserOverviewTable from "../../components/users/UserOverviewTable"
import AddUserForm from "../../components/users/AddUserForm"
import { User } from "../../types"
import Head from "next/head"
import Link from "next/link"


const Users : React.FC = () => {

    const [users, setUsers] = useState<Array<User>>([])

    const getUsers = async () => {
        UserService.getAllUsers()
            .then((res) => res.json())
            .then((users) => setUsers(users)) 
    }

    useEffect(() => {
        console.log("test")
        getUsers()
    }, [])

    return (
        <>
            <Head>
                <title>Users</title>
            </Head>
            <main > 
                <Header></Header>
                <UserOverviewTable users={users}/>
            </main>
        </>
    )
}

export default Users