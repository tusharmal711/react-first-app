import { useNavigate } from "react-router-dom";

function Login()
{
    const navigate=useNavigate();
    
    return(
        <div className="main-container">
           <div className="container">
            <h2>Login Here</h2>
            <form>
                <div className="input-field">
                    <span>Enter email here</span>
                    <input type="email" className="email" id="email" required />
                </div>
                <div className="input-field">
                    <span>Enter password here</span>
                    <input type="password" className="password" id="password" required />
                </div>
               <button className="submit" onClick={Log}>Login</button>
               <p id="login">Already have an account? <a onClick={()=>{navigate("/register")}}>Register</a></p>
            </form>
           </div>
        </div>
    )
    function Log()
    {
       let email=document.getElementById("email");
       let password=document.getElementById("password");
       if(email.value!="" && password.value!="")
       {
        navigate("/");
       }
       
     
    }
}
export default Login;