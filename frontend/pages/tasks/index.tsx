import { useEffect, useState } from "react"
import TaskService from "../../service/TaskService"
import Header from "../../components/Header"
import { Task } from "../../types"
import TaskOverviewTable from "@/components/tasks/TaskOverviewTable"
import Head from "next/head"
import { useRouter } from "next/router"

const Tasks : React.FC = () => {
    //const users = [{"username":"test","password":"test"},{"username":"test2","password":"test2"}]

    const { push } = useRouter();
    
    
    useEffect(() => {
        if(!!sessionStorage.getItem("token")){}
            else{
                push("/login")
            }
        }, [])

    return (
        <>
            <Head>
                <title>Tasks</title>
            </Head>
            <Header></Header>
            <main> 
                <TaskOverviewTable></TaskOverviewTable>
            </main>
        </>
    )
}

export default Tasks