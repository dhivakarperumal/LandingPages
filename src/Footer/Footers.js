import React from "react"; 
import './Footer.css';

function Footer()
{
    return(
        <>
        
        <div className="footers">
            <div className="footer-box">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Products</li>
                </ul>
            </div>
            <div className="footer-box">

                <ul>
                    <li>Phone No</li>
                    <li>Location</li>
                    <li>Address</li>
                    <li>Email</li>
                </ul>

            </div>
            <div className="footer-box">
               <ul>
                    <li>+91 8940450973</li>
                    <li>Chennai</li>
                    <li>Mullai Sara Street</li>
                    <li>dhivakar@gmail.com</li>
                </ul>
            </div>
            <div className="footer-box">
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-solid fa-location-dot"></i>
            </div>
        </div>
        <p style={{backgroundColor:"black" , color:"white", padding:20 ,textAlign:"center"}} >@Copy Dhivakar WebSites</p>
        </>
    )
}
export default Footer