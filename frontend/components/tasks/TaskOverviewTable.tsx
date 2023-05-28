import React from "react";
import { Task } from "../../types";
import TaskService from "@/service/TaskService";
import Router from "next/router";
import { useEffect, useState } from "react"


const TaskOverviewTable : React.FC = () => {

    const [tasks, setTasks] = useState<Array<Task>>([])


    const getTasks = async () => {
        TaskService.getAllTasks()
            .then((res) => res.json())
            .then((tasks) => setTasks(tasks)) 
    }
    
    useEffect(() => {
        getTasks()
    }, [])

    const handleDelete = (id: number) => {
        console.log(id)
        TaskService.deleteTask(id)
        .then((res) => {
            if(res.status === 200){
                Router.reload()
            }
        })
    }
    return (
        <>
            <div className="mx-5  shadow-lg shadow-inset p-3 mb-5 bg-white text-center mt-5">
                {tasks && (
                    <table className="table table-striped table-light">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Deadline</th>
                                <th scope="col">User ID</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks && 
                            tasks.map((task, index) => (
                                <tr key={index}>
                                    <td scope="rod">{task.id}</td>
                                    <td scope="row">{task.title}</td>
                                    <td scope="row">{task.description}</td>
                                    <td scope="row">{task.deadline.toString()}</td>
                                    <td scope="row">{task.userId}</td>
                                    <td>
                                    <button onClick={() => handleDelete(task.id)} className="btn">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default TaskOverviewTable