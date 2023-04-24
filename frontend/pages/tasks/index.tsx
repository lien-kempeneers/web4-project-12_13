import { useEffect, useState } from "react"
import TaskService from "../../service/TaskService"
import Header from "../../components/Header"
import { Task } from "../../types"
import TaskOverviewTable from "@/components/tasks/TaskOverviewTable"
import Head from "next/head"

const Tasks : React.FC = () => {
    //const users = [{"username":"test","password":"test"},{"username":"test2","password":"test2"}]

    const [tasks, setTask] = useState<Array<Task>>([])

    const getTasks = async () => {
        TaskService.getAllTasks().
            then((jsontasks) => jsontasks.json()).
                then((arraytasks) => setTask(arraytasks)) 
    }

    useEffect(() => {getTasks()}, [])

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