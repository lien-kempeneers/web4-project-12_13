import { useEffect, useState } from "react"
import TaskService from "../../service/TaskService"
import Header from "../../components/Header"
import { Task } from "../../types"
import TaskOverviewTable from "@/components/tasks/TaskOverviewTable"
import Head from "next/head"
import { useRouter } from "next/router"

const Tasks : React.FC = () => {
    //const users = [{"username":"test","password":"test"},{"username":"test2","password":"test2"}]

    const [tasks, setTask] = useState<Array<Task>>([])
    const { push } = useRouter();
    
    const getTasks = async () => {
        TaskService.getAllTasks().
            then((jsontasks) => jsontasks.json()).
                then((arraytasks) => setTask(arraytasks)) 
    }

    useEffect(() => {
        if(!!sessionStorage.getItem("token")){
            getTasks()}
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
                <TaskOverviewTable tasks={tasks}></TaskOverviewTable>
            </main>
        </>
    )
}

export default Tasks