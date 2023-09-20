import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar()
{
    const[isMobile,setMobile]=useState(false)
    return(
        <>
         
         <nav className='navbar'>
            <h3 className='logo'>Spicy foods</h3>
            <ul className={isMobile ? "nav-links-mobile" : 'nav-links'} onClick={()=>setMobile(false)} >
                <li><Link to='' className='home'>Home</Link></li>
                <li><Link to='' className='about'>About</Link></li>
                <li><Link to=''className='services'>Products</Link></li>
                <li><Link to='' className='contact'>Conatact</Link></li>
                <li><Link to='/login' className='login'>Login</Link></li>
            </ul>

            <button className='mobile-menu-icon' onClick={()=>setMobile(!isMobile)} >
                {isMobile? (<i class="fas fa-times" ></i> ) :(<i class="fas fa-bars" ></i>)}
                
            </button>
         </nav>
        
        </>
    )
}
export default Navbar