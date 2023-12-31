import { useEffect, useState } from "react"
import MilestoneService from "../../service/MilestoneService"
import Header from "../../components/Header"
import { Milestone } from "../../types"
import LoginForm from "../../components/users/LoginForm"
import Head from "next/head"


const Milestones : React.FC = () => {
    //const users = [{"username":"test","password":"test"},{"username":"test2","password":"test2"}]
    const [isLogged, setIsLogged] = useState(false);
useEffect(() => {
    setIsLogged(!!sessionStorage.getItem("token"));
    
}, []);

    
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Header></Header>
            <main> 
                {isLogged ? <div><p>You are already logged in!</p></div>: <LoginForm></LoginForm>}
            </main>
        </>
    )
}

export default Milestones