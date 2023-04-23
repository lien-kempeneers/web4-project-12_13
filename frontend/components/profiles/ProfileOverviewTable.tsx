import React from "react";
import { Profile } from "../../types";

type Props = {
    profiles: Array<Profile>;
};

const ProfileOverviewTable : React.FC<Props> = ({profiles}:Props) => {
    return (
        <>
            <div className="">
                {profiles && (
                    <table className="">
                        <thead>
                            <tr>
                                <th className="">ID</th>
                                <th className="">Name</th>
                                <th className="">Biography</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profiles && 
                            profiles.map((profile, index) => (
                                <tr key={index}>
                                    <td className="">{profile.id}</td>
                                    <td className="">{profile.name}</td>
                                    <td className="">{profile.biography}</td>
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