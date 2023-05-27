import React, { FormEvent } from "react";
import { User } from "../../types";
import UserService from "@/service/UserService";
import { json } from "stream/consumers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"



const AddUserForm : React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isEnable, setEnable] = useState(true);




    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(username, password);
        //TODO handle login + store in session storage
        //throw new Error("Function not implemented.");
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="">
                <label htmlFor="name">Username:</label>
            </div>
            <input
                id="username"
                type="text"
                placeholder={"email"}
                onChange={(event) => setUsername(event.target.value)}
            />
            <div className="">
                <label htmlFor="name">Password:</label>
            </div>
            <input
                id="password"
                type="password"
                placeholder={"password"}
                onChange={(event) => setPassword(event.target.value)}
                />
            <div className="">
                <button type="submit">Submit</button>
            </div>
        </form>
        </>
    )
}

export default AddUserForm