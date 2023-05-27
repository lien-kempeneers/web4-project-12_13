import React from "react";
import { Task } from "../../types";

type Props = {
    tasks: Array<Task>;
};

const TaskOverviewTable : React.FC<Props> = ({tasks}:Props) => {
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