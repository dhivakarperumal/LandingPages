import React from "react";
import img from '../images/3.jpg'
import './Count.css'


function Forms()
{
    return(
        <>
        
        <h1 className="head">Contacts</h1>
        <div className="boxes1">
                <div className="box1">
                    <img src={img} alt=''  width={600} height={380}/>
                </div>
                <div className="box1">
                    <h1 style={{color:"black"}}>Information</h1>

                    <div className="Forms">
                        <div className="for">
                           <input type='text' placeholder="Enter A Name"></input>
                        </div>

                        <div className="for">
                           <input type='Email' placeholder="Enter Your Email"></input>
                        </div>

                        <div className="for">
                           <textarea>Messages</textarea>
                        </div>

                        <div className="for">
                           <button className="btns">Submit</button>
                        </div>
                    </div>
                    
                </div>
            </div>
         
        </>
    )
}
export default Forms