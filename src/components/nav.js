import {Link} from "react-router-dom"



const Nav = () => {
  return (
    <div>
        <h3>Clemens Devarajan</h3>
        <div>
        <Link to={"/about"}>
        <div>About</div> 
        </Link>
        </div>
    </div>
    
  )  
}

export default Nav