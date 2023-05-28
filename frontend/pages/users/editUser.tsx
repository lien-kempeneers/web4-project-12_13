import { useEffect, useState } from "react"
import Header from "../../components/Header"
import UserOverviewTable from "../../components/users/UserOverviewTable"
import Head from "next/head"
import "../../node_modules/bootstrap/scss/bootstrap.scss";
import { useRouter } from "next/router"
import EditUserForm from "@/components/users/EditUserForm";

const EditUser : React.FC = () => {

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
                <title>Edit User</title>
            </Head>
            <Header/>
            <EditUserForm/>
        </>
    )
}

export default EditUser