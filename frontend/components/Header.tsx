import Link from "next/link"
import "../node_modules/bootstrap/scss/bootstrap.scss";

const Header : React.FC = () => {
    return (
        <>
<header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Task App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
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
                        <Link href="/" className="nav-link">Sign Up</Link>
                    </li>
                    <li>
                        <Link href="/" className="nav-link">Login</Link>
                    </li>
                </ul>
    </nav>
</header>
</>
    )
}

export default Header