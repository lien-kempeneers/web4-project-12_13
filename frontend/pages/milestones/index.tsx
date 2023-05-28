import { useEffect, useState } from "react"
import Header from "../../components/Header"
import MilestoneOverviewTable from "../../components/milestones/MilestoneOverviewTable"
import Head from "next/head"
import { useRouter } from "next/router"


const Milestones : React.FC = () => {
    //const users = [{"username":"test","password":"test"},{"username":"test2","password":"test2"}]

    const { push } = useRouter();



    useEffect(() => {
        if(!!sessionStorage.getItem("token")){}
        else{
            push('/login');
        }
    
    }, [])
        
    return (
        <>
            <Head>
                <title>Milestones</title>
            </Head>
            <Header></Header>
            <main> 
                <MilestoneOverviewTable></MilestoneOverviewTable>
            </main>
        </>
    )
}

export default Milestones