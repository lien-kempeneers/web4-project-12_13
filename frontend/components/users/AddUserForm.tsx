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
    const [error, setError] = useState("");
    const { push } = useRouter();

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(email, password);
        UserService.createUser(name, email, password).then((result)=>{
            if(!result.ok){
                setError("Niet alle velden zijn correct ingevuld, probeer opnieuw")
            }else{
            LoginService.logIn(email, password).then(
                (result)=>{push("/users")})
        }}
        )
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="errorField">{error}</div>
            <div className="">
                <label htmlFor="name">Username:</label>
            </div>
            <input 
                id="name"
                type="text"
                placeholder={"username"}
                required
                onChange={(event) => setName(event.target.value)}
            />
            <div className="">
                <label htmlFor="name">Email:</label>
            </div>
            <input
                id="email"
                type="email"
                placeholder={"email"}
                required
                onChange={(event) => setEmail(event.target.value)}
            />
            <div className="">
                <label htmlFor="name">Password:</label>
            </div>
            <input
                id="password"
                type="password"
                placeholder={"password"}
                required
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