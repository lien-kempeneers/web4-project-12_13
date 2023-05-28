import Link from "next/link"
import "../node_modules/bootstrap/scss/bootstrap.scss";
import { useEffect, useState } from "react"

const Header : React.FC = () => {
    const [isLogged, setIsLogged] = useState(false);
useEffect(() => {
    setIsLogged(!!sessionStorage.getItem("token"));
}, []);
    return (
        <>
<header>
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Task App</a>{isLogged?
                      
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link href="/users" className="nav-link">Users</Link>
                    </li>
                    <li>
                        <Link href="/tasks" className="nav-link">Tasks</Link>
                    </li>
                    <li>
                        <Link href="/milestones" className="nav-link">Milestones</Link>
                    </li>
                    <li>
                        <Link href="/profiles" className="nav-link">Profiles</Link>
                    </li>
                </ul>:""}
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Link href="/signup" className="nav-link">Sign Up</Link>
                    </li>
                    <li>
                        {isLogged?<Link href="/logout" className="nav-link">Logout</Link>: <Link href="/login" className="nav-link">Login</Link>}
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
</>
    )
}

export default Header