import React from "react";
import { Profile } from "../../types";
import ProfileService from "@/service/ProfileService";
import Router from "next/router";
import { useEffect, useState } from "react"
import { profile } from "console";


const ProfileOverviewTable : React.FC = () => {

    const [profiles, setProfiles] = useState<Array<Profile>>([])

    const getProfiles = async () => {
        ProfileService.getAllProfiles()
            .then((res) => res.json())
            .then((profiles) => setProfiles(profiles)) 
    }
    
    useEffect(() => {
        getProfiles()
    }, [])
    
    const handleDelete = (id: number) => {
        console.log(id)
        ProfileService.deleteProfile(id)
        .then((res) => {
            if(res.status === 200){
                Router.reload()
            }
        })
    }

    return (
        <>
            <div className="mx-5  shadow-lg shadow-inset p-3 mb-5 bg-white text-center mt-5">
                {profiles && (
                    <table className="table table-striped table-light">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Biography</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profiles && 
                            profiles.map((profile, index) => (
                                <tr key={index}>
                                    <td scope="row">{profile.id}</td>
                                    <td scope="row">{profile.name}</td>
                                    <td scope="row">{profile.biography}</td>
                                    <td>
                                    <button onClick={() => handleDelete(profile.id)} className="btn">Delete</button>
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

export default ProfileOverviewTable