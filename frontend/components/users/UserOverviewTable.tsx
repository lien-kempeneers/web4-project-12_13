import React from "react";
import { User } from "../../types";
import UserService from "@/service/UserService";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react"




const UserOverviewTable : React.FC = () => {
    
    const [users, setUsers] = useState<Array<User>>([])


    const getUsers = async () => {
        UserService.getAllUsers()
            .then((res) => res.json())
            .then((users) => setUsers(users)) 
    }

    useEffect(() => {
        getUsers()
    }, [])

    const handleDelete = (id: number) => {
        console.log(id)
        UserService.deleteUser(id)
        .then((res) => {
            if(res.status === 200){
                Router.reload()
            }
        })
    }


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
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
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
                                    <td>
                                        <Link href="/edit" className="btn">Edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user.id)} className="btn">Delete</button>
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

export default UserOverviewTable