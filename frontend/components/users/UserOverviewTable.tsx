import React from "react";
import { User } from "../../types";

type Props = {
    users: Array<User>;
};

const UserOverviewTable : React.FC<Props> = ({users}:Props) => {
    return (
        <>
            <div className="">
                {users && (
                    <table className="">
                        <thead>
                            <tr>
                                <th className="">Name</th>
                                <th className="">Password</th>
                                <th className="">Email</th>
                                <th className="">ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && 
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td className="">{user.username}</td>
                                    <td className="">{user.email}</td>
                                    <td className="">{user.password}</td>
                                    <td className="">{user.id}</td>
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