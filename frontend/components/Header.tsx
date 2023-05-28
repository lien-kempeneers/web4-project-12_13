import Link from "next/link"
import "../node_modules/bootstrap/scss/bootstrap.scss";
import { useEffect, useState } from "react"

const Header : React.FC = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [userName, setUserName] = useState("");
useEffect(() => {
    setIsLogged(!!sessionStorage.getItem("token"));
    setUserName(sessionStorage.getItem("username")||"");
}, []);
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/">Task App</a>
                {isLogged?
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link href="/users" className="nav-link text-white">Users</Link>
                    </li>
                    <li>
                        <Link href="/tasks" className="nav-link text-white">Tasks</Link>
                    </li>
                    <li>
                        <Link href="/milestones" className="nav-link text-white">Milestones</Link>
                    </li>
                    <li>
                        <Link href="/profiles" className="nav-link text-white">Profiles</Link>
                    </li>
                </ul>:""}
                <ul className="navbar-nav mr-auto">
                    <li>
                    {isLogged?<p className="nav-link text-white">{"Welcome "+userName}</p>:<Link href="/signup" className="nav-link text-white">Sign Up</Link>}
                    </li>
                    <li>
                        {isLogged?<Link href="/logout" className="nav-link text-white">Logout</Link>: <Link href="/login" className="nav-link text-white">Login</Link>}
                    </li>
                </ul>
            </div>
        </nav>
</>
    )
}

export default Header