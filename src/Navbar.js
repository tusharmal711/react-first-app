import {Link,NavLink} from 'react-router-dom';

const Navbar =()=>{
    return <nav class="nav-bar">
     <NavLink to="/" className="nav-link home">Home</NavLink>
     <NavLink to="register" className="nav-link register">Register</NavLink>
     <NavLink to="login" className="nav-link login">Login</NavLink>
     <NavLink to="contact" className="nav-link contact">Contact</NavLink>
    </nav>
}
export default Navbar;