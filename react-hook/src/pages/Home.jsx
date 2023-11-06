import { Link, Outlet } from "react-router-dom";

function Home(){
    return (
        <>
    <nav >
        <ul >
            <li>
                <Link to="/use-effect">Use Effect</Link>
            </li>
            <li>
                <Link to="/use-context" >Use Context</Link>
            </li>
            <li>
                <Link to="/use-callback" >Use Callback</Link>
            </li>
            <li>
                <Link to="/use-memo" >Use Memo</Link>
            </li>
            <li>
                <Link to="/use-ref">Use Ref</Link>
            </li>
            <li>
                <Link to="/custom-hook" >Custom Hook</Link>
            </li>
            </ul>
    </nav>
    <div className="container">
    <Outlet/>
    </div>
        </>
    )
}

export default Home