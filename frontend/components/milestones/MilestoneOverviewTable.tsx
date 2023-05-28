import React from "react";
import { Milestone } from "../../types";
import Link from "next/link";
import MilestoneService from "@/service/MilestoneService";
import Router from "next/router";
import { useEffect, useState } from "react"


const MilestoneOverviewTable : React.FC = () => {

    const [milestones, setMilestones] = useState<Array<Milestone>>([])


    const getMilestones = async () => {
        MilestoneService.getAllMilestones()
            .then((res) => res.json())
            .then((milestones) => setMilestones(milestones)) 
    }

    useEffect(() => {
        getMilestones()
    }, [])

    const handleDelete = (id: number) => {
        console.log(id)
        MilestoneService.deleteMilestone(id)
        .then((res) => {
            if(res.status === 200){
                Router.reload()
            }
        })
    }

    return (
        <>
            <div className="mx-5  shadow-lg shadow-inset p-3 mb-5 bg-white text-center mt-5">
                {milestones && (
                    <table className="table table-striped table-light">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Deadline</th>
                                <th scope="col">Task ID</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {milestones && 
                            milestones.map((milestone, index) => (
                                <tr key={index}>
                                    <td scope="row">{milestone.id}</td>
                                    <td scope="row">{milestone.title}</td>
                                    <td scope="row">{milestone.description}</td>
                                    <td scope="row">{milestone.deadline.toString()}</td>
                                    <td scope="row">{milestone.taskId}</td>
                                    <td>
                                        <button onClick={() => handleDelete(milestone.id)} className="btn">Delete</button>
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

export default MilestoneOverviewTable