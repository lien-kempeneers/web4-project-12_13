import { useEffect, useState } from "react"
import MilestoneService from "../../service/MilestoneService"
import Header from "../../components/Header"
import { Milestone } from "../../types"
import Logout from "../../components/users/LogOut"
import Head from "next/head"


const Milestones : React.FC = () => {
    //const users = [{"username":"test","password":"test"},{"username":"test2","password":"test2"}]

    
    return (
        <>
            <Head>
                <title>Logout</title>
            </Head>
            <Header></Header>
            <main> 
                <Logout></Logout>
            </main>
        </>
    )
}

export default Milestones