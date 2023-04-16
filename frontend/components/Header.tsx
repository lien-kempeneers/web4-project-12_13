import Link from "next/link"

const Header : React.FC = () => {
    return (
<header>
    <a className=""></a> 
    <nav className="">
        <Link href="/" className="">Home </Link>
        <Link href="/users" className="">Users</Link>
    </nav>
</header>
    )
}

export default Header