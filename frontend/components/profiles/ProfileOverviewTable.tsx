import React from "react";
import { Profile } from "../../types";

type Props = {
    profiles: Array<Profile>;
};

const ProfileOverviewTable : React.FC<Props> = ({profiles}:Props) => {
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
                            </tr>
                        </thead>
                        <tbody>
                            {profiles && 
                            profiles.map((profile, index) => (
                                <tr key={index}>
                                    <td scope="row">{profile.id}</td>
                                    <td scope="row">{profile.name}</td>
                                    <td scope="row">{profile.biography}</td>
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