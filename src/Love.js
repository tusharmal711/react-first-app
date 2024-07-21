import { GiLovers } from "react-icons/gi";
import { GiSelfLove } from "react-icons/gi";
function surprise(){
       let letter=document.getElementById("letter");
       let love1=document.getElementById("love1");
       letter.classList.add("ld");
       love1.classList.add("lld");
}
const Love = () =>{
return (
    <div className="mcontainer">
        <div className="love1" id="love1">
            <p>You have a surprise , please click here ...</p>
            <button onClick={surprise}>Surprise</button>
            <GiLovers id="love1"/>
        </div>
        <div className="letter" id="letter">
            <p>আমি তোমাকে অনেক ভালোবাসি চুটিয়া। তোমাকে নিয়ে আমার অনেক স্বপ্ন,
                 কতটুকু পূরণ হবে জানি না। তবে আমি তোমাকে কথা দিচ্ছি আমি তোমার সাথে
                  চিরকাল থাকব। আমি তোমার যত্ন নেব। আমি তোমার সব স্বপ্ন পূরণ করার চেষ্টা করব 
                  এবং তোমাকে সুখী করার চেষ্টা করব। যে 
                কোন পরিস্থিতিতে তুমি আমার পাশে থাকবে এটাই কামনা করি।
                ঈশ্বর আপনার মঙ্গল করুন.সুখী থাকুন.<span>----Your Kutta</span></p>
                <GiSelfLove id="love2"/>
        </div>
        
           
        
    </div>
);
}
export default Love;
