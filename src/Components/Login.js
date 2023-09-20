import React, { useState } from 'react';
import './Login.css'

function Login()
{
    const[action,setAction]=useState("Singn Up");

    return(
        <>
         
         <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login"? <div></div>:<div className='input'>
                    <i class="fa-solid fa-user"></i>
                    <input type='text' placeholder='Name'/>
                </div>}
                

                <div className='input'>
                <i class="fa-solid fa-envelope"></i>
                    <input type='email' placeholder='Email Id'/>
                </div>

                <div className='input'>
                <i class="fa-solid fa-lock"></i>
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
            {action ==="Sign Up" ? <div></div> : <div className='forget-password'>Lost password ?<span>Click Here</span></div>}
           
            <div className='submit-container'>
                <div className={action ==="Login" ? "submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}>Sing Up</div>
                <div className={action ==="Sign Up" ? "submit gray" :"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
         </div>
        
        </>
    )
}
export default Login