import React, { FormEvent } from "react";
import UserService from "@/service/UserService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"



const EditUserForm : React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [id, setId] = useState(0);
    const { push } = useRouter();

    const router = useRouter();
    console.log(router.query);

    const getUser = async () => {
        const userId = parseInt(router.query.id as string);
        setId(userId)
        UserService.getUser(userId)
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
        .then((result)=>
        {if(!result.ok){
            setError("Niet alle velden zijn correct ingevuld, probeer opnieuw.")
        }
        else{
        push("/users")}})
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
                value={name || ""}
                required
                onChange={(event) => setName(event.target.value)}
            />
            <div className="">
                <label htmlFor="name">Email:</label>
            </div>
            <input
                id="email"
                type="email"
                value={email || ""}
                required
                onChange={(event) => setEmail(event.target.value)}
            />
            <div className="">
                <label htmlFor="name">Password:</label>
            </div>
            <input
                id="password"
                type="password"
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

export default EditUserForm