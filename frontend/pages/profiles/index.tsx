import { useEffect, useState } from "react"
import ProfileService from "../../service/ProfileService"
import Header from "../../components/Header"
import { Profile } from "../../types"
import ProfileOverviewTable from "../../components/profiles/ProfileOverviewTable"
import Head from "next/head"
import { useRouter } from "next/router"


const Profiles : React.FC = () => {
    const { push } = useRouter();


    useEffect(() => {
        if(!!sessionStorage.getItem("token")){

        } else {
            push("/login")
        }
    }, [])

    return (
        <>
            <Head>
                <title>Profiles</title>
            </Head>
            <Header></Header>
            <main> 
                <ProfileOverviewTable ></ProfileOverviewTable>
            </main>
        </>
    )
}

export default Profiles