import { useEffect, useState } from "react"
import MilestoneService from "../../service/MilestoneService"
import Header from "../../components/Header"
import { Milestone } from "../../types"
import MilestoneOverviewTable from "../../components/milestones/MilestoneOverviewTable"


const Milestones : React.FC = () => {
    //const users = [{"username":"test","password":"test"},{"username":"test2","password":"test2"}]

    const [milestones, setMilestone] = useState<Array<Milestone>>([])

    const getMilestone = async () => {
        MilestoneService.getAllMilestones().
            then((jsonmilestones) => jsonmilestones.json()).
                then((arraymilestones) => setMilestone(arraymilestones)) 
    }

    useEffect(() => {getMilestone()}, [])

    return (
        <>
            <head>
                <title>Milestones</title>
            </head>
            <Header></Header>
            <main> 
                <MilestoneOverviewTable milestones={milestones}></MilestoneOverviewTable>
            </main>
        </>
    )
}

export default Milestones