import { useEffect, useState } from "react"
import MilestoneService from "../../service/MilestoneService"
import Header from "../../components/Header"
import { Milestone } from "../../types"
import MilestoneOverviewTable from "../../components/milestones/MilestoneOverviewTable"
import Head from "next/head"
import { useRouter } from "next/router"


const Milestones : React.FC = () => {
    //const users = [{"username":"test","password":"test"},{"username":"test2","password":"test2"}]

    const [milestones, setMilestone] = useState<Array<Milestone>>([])
    const { push } = useRouter();


    const getMilestone = async () => {
        MilestoneService.getAllMilestones().
            then((jsonmilestones) => jsonmilestones.json()).
                then((arraymilestones) => setMilestone(arraymilestones)) 
    }

    useEffect(() => {
        if(!!sessionStorage.getItem("token")){
        getMilestone()}
        else{
            push('/login');
        }
    
    }, [])
        
    return (
        <>
            <Head>
                <title>Milestones</title>
            </Head>
            <Header></Header>
            <main> 
                <MilestoneOverviewTable milestones={milestones}></MilestoneOverviewTable>
            </main>
        </>
    )
}

export default Milestones