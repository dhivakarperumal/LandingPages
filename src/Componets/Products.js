import React from "react";
import './Product.css'

import img1 from  '../images/3.jpg';
import img2 from  '../images/4.jpg';
import img3 from  '../images/5.jpg';
import img4 from  '../images/6.jpg';

import img5 from  '../images/7.jpg';
import img6 from  '../images/11.jpg';
import img7 from  '../images/9.jpg';
import img8 from  '../images/10.jpg';


function Products()
{
    return(
        <>
        <h1 className="head">Our Products</h1>
        <div className="product">
            <div className="product_box">
                <img src={img1} alt=""  width={298} height={200} />
                <h2>IceCreem <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></h2>
                <p>Rating <span className="rating">2.3</span></p>
                <button className="btn1">Add To Cart</button>
            </div>
            <div className="product_box">
            <img src={img2} alt=""  width={298} height={200}/>
                <h2>Chicken <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></h2>
                <p>Rating <span className="rating">3.3</span></p>
                <button className="btn1">Add To Cart</button>
            </div>
            <div className="product_box">

            <img src={img3} alt=""  width={298} height={200}/>
                <h2>Burger<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></h2>
                <p>Rating <span className="rating">5.2</span></p>
                <button className="btn1">Add To Cart</button>
            </div>
            <div className="product_box">
            <img src={img4} alt=""  width={298} height={200}/>
                <h2>Chicken lollipop<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></h2>
                <p>Rating <span className="rating">4.4</span></p>
                <button className="btn1">Add To Cart</button>
            </div>
        </div>

        <div className="product">
            <div className="product_box">
                <img src={img5} alt=""  width={298} height={200}/>
                <h2>Pizhai<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></h2>
                <p>Rating <span className="rating">5.4</span></p>
                <button className="btn1">Add To Cart</button>
            </div>
            <div className="product_box">
            <img src={img6} alt=""  width={298} height={200}/>
                <h2>Foods Itali<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></h2>
                <p>Rating <span className="rating">1.3</span></p>
                <button className="btn1">Add To Cart</button>
            </div>
            <div className="product_box">

            <img src={img7} alt=""  width={298} height={200}/>
                <h2>Chilli chicken<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></h2>
                <p>Rating <span className="rating">3.2</span></p>
                <button className="btn1">Add To Cart</button>
            </div>
            <div className="product_box">
            <img src={img8} alt=""  width={298} height={200}/>
                <h2>Chilli<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></h2>
                <p>Rating <span className="rating">5.3</span></p>
                <button className="btn1">Add To Cart</button>
            </div>
        </div>

        
        
        </>
    )
}
export default Products