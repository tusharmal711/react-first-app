import { BrowserRouter,Routes ,Route} from "react-router-dom";
import Register from './Register.js';
import Login from './Login.js';
import Contact from './Contact.js';
import Home from './Home.js';
import Error from './Error.js';
import Navbar from "./Navbar.js";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="register" element={<Register />}/>
   <Route path="login" element={<Login />}/>
   <Route path="contact" element={<Contact />}/>
   <Route path="*" element={<Error />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
