import Link from "next/link"

const Header : React.FC = () => {
    return (
<header>
    <a className=""></a> 
    <nav className="">
        <Link href="/" className="">Home </Link>
        <Link href="/users" className="">Users</Link>
        <Link href="/tasks" className="">Tasks</Link>
        <Link href="/milestones" className="">Milestones</Link>
        <Link href="/profiles" className="">Profiles</Link>


    </nav>
</header>
    )
}

export default Header