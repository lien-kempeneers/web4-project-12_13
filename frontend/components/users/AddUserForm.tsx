import React, { FormEvent } from "react";
import { User } from "../../types";
import UserService from "@/service/UserService";
import { json } from "stream/consumers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import LoginService from "@/service/LoginService";



const AddUserForm : React.FC = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEnable, setEnable] = useState(true);
    const { push } = useRouter();

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(email, password);
        UserService.createUser(name, email, password).then((result)=>{
            LoginService.logIn(email, password).then(
                (result)=>{
            push("/users")})
        }
        )
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="">
                <label htmlFor="name">Username:</label>
            </div>
            <input 
                id="name"
                type="text"
                placeholder={"username"}
                onChange={(event) => setName(event.target.value)}
            />
            <div className="">
                <label htmlFor="name">Email:</label>
            </div>
            <input
                id="email"
                type="text"
                placeholder={"email"}
                onChange={(event) => setEmail(event.target.value)}
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