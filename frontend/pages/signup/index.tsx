import { useEffect, useState } from "react"
import MilestoneService from "../../service/MilestoneService"
import Header from "../../components/Header"
import { Milestone } from "../../types"
import AddUserForm from "../../components/users/AddUserForm"
import Head from "next/head"


const Milestones : React.FC = () => {
    //const users = [{"username":"test","password":"test"},{"username":"test2","password":"test2"}]

    
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Header></Header>
            <main> 
                <AddUserForm></AddUserForm>
            </main>
        </>
    )
}

export default Milestones