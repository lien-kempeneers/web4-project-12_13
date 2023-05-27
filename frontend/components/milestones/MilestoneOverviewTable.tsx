import React from "react";
import { Milestone } from "../../types";
import Link from "next/link";

type Props = {
    milestones: Array<Milestone>;
};

const MilestoneOverviewTable : React.FC<Props> = ({milestones}:Props) => {
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