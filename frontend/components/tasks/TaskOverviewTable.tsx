import React from "react";
import { Task } from "../../types";

type Props = {
    tasks: Array<Task>;
};

const TaskOverviewTable : React.FC<Props> = ({tasks}:Props) => {
    return (
        <>
            <div className="">
                {tasks && (
                    <table className="">
                        <thead>
                            <tr>
                                <th className="">ID</th>
                                <th className="">Title</th>
                                <th className="">Description</th>
                                <th className="">Deadline</th>
                                <th className="">UserID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks && 
                            tasks.map((task, index) => (
                                <tr key={index}>
                                    <td className="">{task.id}</td>
                                    <td className="">{task.title}</td>
                                    <td className="">{task.description}</td>
                                    <td className="">{task.deadline.toString()}</td>
                                    <td className="">{task.userId}</td>
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