import React from "react";
import { User } from "../../types";


type Props = {
    users: Array<User>;
};

const UserOverviewTable : React.FC<Props> = ({users}:Props) => {
    return (
        <> 
        <div className="mx-5  shadow-lg shadow-inset p-3 mb-5 bg-white text-center mt-5">
                {users && (
                    <table className="table table-striped table-light">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Password</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && 
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td scope="row">{user.id}</td>
                                    <td scope="row">{user.username}</td>
                                    <td scope="row">{user.password}</td>
                                    <td scope="row">{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default UserOverviewTable