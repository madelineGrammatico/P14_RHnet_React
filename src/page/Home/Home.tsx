import { Link } from "react-router-dom";
export function Home(){
    return(
        <main>
            <h1>home</h1>
            <Link to="/CurrentEmployees" >CurrentEmployees</Link>
        </main>
        
    )

}