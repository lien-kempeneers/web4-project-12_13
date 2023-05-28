import React, { FormEvent } from "react";
import UserService from "@/service/UserService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import LoginService from "@/service/LoginService";
import { User } from "@/types";



const EditUserForm : React.FC = () => {
    const [user, setUser] = useState<User>()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEnable, setEnable] = useState(true);
    const { push } = useRouter();

    const router = useRouter();
    console.log(router.query);
    const id = parseInt(router.query.id as string);

    const getUser = async () => {
        UserService.getUser(id)
            .then((res) => res.json())
            .then((user) => {setName(user.username); setEmail(user.email) })
    }

    useEffect(() => {
        if(!!sessionStorage.getItem("token")){
            getUser();
        }else{
            push('/login');
        }
    }, [])


    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(email, password);
        UserService.updateUser(id, name, password, email)
        .then((result)=>{push("/users")})
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
                value={name || ""}
                onChange={(event) => setName(event.target.value)}
            />
            <div className="">
                <label htmlFor="name">Email:</label>
            </div>
            <input
                id="email"
                type="text"
                value={email || ""}
                onChange={(event) => setEmail(event.target.value)}
            />
            <div className="">
                <label htmlFor="name">Password:</label>
            </div>
            <input
                id="password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                />
            <div className="">
                <button type="submit">Submit</button>
            </div>
        </form>
        </>
    )
}

export default EditUserForm