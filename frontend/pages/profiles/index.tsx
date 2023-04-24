import { useEffect, useState } from "react"
import ProfileService from "../../service/ProfileService"
import Header from "../../components/Header"
import { Profile } from "../../types"
import ProfileOverviewTable from "../../components/profiles/ProfileOverviewTable"
import Head from "next/head"


const Profiles : React.FC = () => {
    //const users = [{"username":"test","password":"test"},{"username":"test2","password":"test2"}]

    const [profiles, setProfile] = useState<Array<Profile>>([])

    const getProfiles = async () => {
        ProfileService.getAllProfiles().
            then((jsonprofiles) => jsonprofiles.json()).
                then((arrayprofiles) => setProfile(arrayprofiles)) 
    }

    useEffect(() => {getProfiles()}, [])

    return (
        <>
            <Head>
                <title>Profiles</title>
            </Head>
            <Header></Header>
            <main> 
                <ProfileOverviewTable profiles={profiles}></ProfileOverviewTable>
            </main>
        </>
    )
}

export default Profiles