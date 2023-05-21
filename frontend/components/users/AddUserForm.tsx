import React, { FormEvent } from "react";
import { User } from "../../types";

const AddUserForm : React.FC = () => {
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
                <label htmlFor="name">Username</label>
            </div>
            <input 
                id="name"
                type="text"
                value={username}
                onChange={(event) => setName(event.target.value)}
            />
            <div className="">
                <button
                    type="submit"
                />
            </div>
        </form>
        </>
    )
}