import React from 'react';
import './Home.css'

function Home()
{
    return(
        <>
         
         <div className='container1'>
           <div className='para'>
            <h1>Buy Organic Spices Food</h1>
            <p>Conventional or Organic Spices - Don't Waste the CrumbsOrganic spices are grown 
                without chemicals and preservatives and are not fumigated or irradiated</p>

                <div className="search">
                    <input type='text' placeholder='Enter A Food Names'/>
                    <button className='btn'>Search</button>
                </div>
               <div className='read'>
                      <button className='btn'>Read More</button>
               </div>
           </div>
         </div>
         
        </>
    )
}
export default Home