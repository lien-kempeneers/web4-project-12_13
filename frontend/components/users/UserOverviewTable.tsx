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
                            </tr>
                        </thead>
                        <tbody>
                            {users && 
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td className="">{user.username}</td>
                                    <td className="">{user.password}</td>
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