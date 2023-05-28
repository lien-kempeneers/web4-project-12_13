import { useEffect, useState } from "react"
import UserService from "../../service/UserService"
import Header from "../../components/Header"
import UserOverviewTable from "../../components/users/UserOverviewTable"
import AddUserForm from "../../components/users/AddUserForm"
import { User } from "../../types"
import Head from "next/head"
import Link from "next/link"
import "../../node_modules/bootstrap/scss/bootstrap.scss";
import { useRouter } from "next/router"


const Users : React.FC = () => {

    const { push } = useRouter();


    useEffect(() => {
        if(!!sessionStorage.getItem("token")){
            }
            else{
                push("/login")
            }
        
    }, [])

    return (
        <>
            <Head>
                <title>Users</title>
            </Head>
                <Header></Header>
                <UserOverviewTable />
        </>
    )
}

export default Users