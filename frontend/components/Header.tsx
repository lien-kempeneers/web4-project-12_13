import Link from "next/link"
import "../node_modules/bootstrap/scss/bootstrap.scss";

const Header : React.FC = () => {
    return (
        <>
<header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Task App</a>
        
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
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Link href="/signup" className="nav-link">Sign Up</Link>
                    </li>
                    <li>
                        <Link href="/login" className="nav-link">Login</Link>
                    </li>
                </ul>
    </nav>
</header>
</>
    )
}

export default Header