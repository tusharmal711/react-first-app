
import {Link,NavLink} from 'react-router-dom';
import { LuMenuSquare } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";

function dis()
{
    let mob=document.getElementById("nav-bar1");
    console.log("click");
    mob.classList.add("trans");
}
 
function none()
{
    let mob=document.getElementById("nav-bar1");
    mob.classList.remove("trans");
}
function none1()
{
    let mob=document.getElementById("nav-bar1");
    mob.classList.remove("trans");
    mob.classList.add("tran");
}

  
const Navbar =()=>{
    return <div>
    <nav className="nav-bar" id="nav-bar">
     <NavLink to="/" className="nav-link home">Home</NavLink>
     <NavLink to="register" className="nav-link register">Register</NavLink>
     <NavLink to="login" className="nav-link login">Login</NavLink>
     <NavLink to="contact" className="nav-link contact">Contact</NavLink>
     </nav>
     <div className="nav2" id="nav2">
        <LuMenuSquare id="menu" onClick={dis}/>
     </div>
     
     <nav className="nav-bar1" id="nav-bar1">
     <RxCross1 id="cross"  onClick={none1}/>
     <NavLink to="/" className="nav-link1 home1" onClick={none}>Home</NavLink>
     <NavLink to="register" className="nav-link1 register1" onClick={none}>Register</NavLink>
     <NavLink to="login" className="nav-link1 login1" onClick={none}>Login</NavLink>
     <NavLink to="contact" className="nav-link1 contact1" onClick={none}>Contact</NavLink>
     </nav>
    
     </div>
}

   

export default Navbar;


