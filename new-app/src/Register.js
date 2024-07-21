import { useNavigate } from "react-router-dom";
import './CSS-COMPONENT/register.css';
function Register()
{
    const navigate=useNavigate();
    return(
        <div className="main-container">
           <div className="container">
            <h2>Register Here</h2>
            <form>
                <div className="input-field name1">
                    <span>Enter your name</span>
                    <input type="text" className="name" id="name" required/>
                </div>
                <div className="input-field email1">
                    <span>Enter your email</span>
                    <input type="email" className="email" id="email" required/>
                </div>
                <div className="input-field password1">
                    <span>Enter a password</span>
                    <input type="password" className="password" id="password" required/>
                </div>
                <button className="submit">Submit</button>
                <p id="login">Already have an account? <a onClick={()=>{navigate("/login")}}>Login</a></p>
            </form>
           </div>
        </div>
    )
}


export default Register;