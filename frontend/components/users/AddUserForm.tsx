import React, { FormEvent } from "react";
import { User } from "../../types";
import UserService from "@/service/UserService";
import { json } from "stream/consumers";
import { useRouter } from "next/router";

const router = useRouter();


const AddUserForm : React.FC = () => {


    function setPassword(value: string): void {
        throw new Error("Function not implemented.");
    }

    function setEmail(value: string): void {
        throw new Error("Function not implemented.");
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

    function setName(value: string): void {
        throw new Error("Function not implemented.");
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
                value={"username"}
                onChange={(event) => setName(event.target.value)}
            />
            <div className="">
                <label htmlFor="name">Email:</label>
            </div>
            <input
                id="email"
                type="text"
                value={"email"}
                onChange={(event) => setEmail(event.target.value)}
            />
            <div className="">
                <label htmlFor="name">Password:</label>
            </div>
            <input
                id="password"
                type="text"
                value={"password"}
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