import React from "react";
import { Milestone } from "../../types";
import Link from "next/link";

type Props = {
    milestones: Array<Milestone>;
};

const MilestoneOverviewTable : React.FC<Props> = ({milestones}:Props) => {
    return (
        <>
            <div className="">
                {milestones && (
                    <table className="">
                        <thead>
                            <tr>
                                <th className="">ID</th>
                                <th className="">Title</th>
                                <th className="">Description</th>
                                <th className="">Deadline</th>
                                <th className="">TaskID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {milestones && 
                            milestones.map((milestone, index) => (
                                <tr key={index}>
                                    <td className="">{milestone.id}</td>
                                    <td className="">{milestone.title}</td>
                                    <td className="">{milestone.description}</td>
                                    <td className="">{milestone.deadline.toString()}</td>
                                    <td className="">{milestone.taskId}</td>
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