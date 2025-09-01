import React from 'react';
// import manukaImg from "../../assets/manuka.png";
import new_zealand from "../../assets/new_zealand_honey_logo.svg"
import manuka1 from "../../assets/manuka.png"
import Love from "../../assets/Link.png"
import honeyassociation from "../../assets/UMF-Honey-Association-UMFHA-1.avif"
import nongmo from "../../assets/Non-GMO-Manuka-Honey-2.avif"
import manuka9 from "../../assets/manuka9.png"
import manuka11 from "../../assets/manuka11.png"
import manuka10 from "../../assets/manuka10.webp"
import manuka7 from "../../assets/manuka7.png"
import manuka12 from "../../assets/manuka12.webp"
import manuka13 from "../../assets/manuka13.png"
import manuka5 from "../../assets/manuka5.png"
import manuka15 from "../../assets/manuka15.png"
import manuka6 from "../../assets/manuka6.webp"
import manukaImg from "../../assets/14Link.png"

import glyp from "../../assets/Glyp-3.avif"
import halal from "../../assets/halal.avif" 
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsBag } from 'react-icons/bs';
import './index.css';


const Productpage = () => {

    return(
        <div className="product-container">
            <div className="mobile-view">
                <div className="bar">
                    <GiHamburgerMenu className="menu-bar" />
                    <img src={new_zealand} alt="new zealand logo" className="logo"/>
                    <AiOutlineSearch  className="search-icon"/>
                    <BsBag  className="cart-bag"/>
                </div>
            <img src={manukaImg} alt="manuka" className="manuka-image"/> 
            <h1>Manuka <br /> Honey UMF 24+ <br /> MGO 1122+</h1>
            <button className="info-button">Help Me Pick</button>
            <p>The Energiser</p>
            <p>You're living an active lifestyle and you care about what goes in and your body. this UMF 15+ manuka honey optimised for life, to hepl you get the most out of your body</p>
            <button className="info-button">Suppliment Facta</button>
            <button className="info-button">Third-party Test Results</button>
            <div className="certification">
                <img className="certification-img" src={honeyassociation} alt="association"/>
                <img  className="certification-img" src={nongmo} alt="nongmo"/>
                <img  className="certification-img" src={glyp} alt="glyp"/>
                <img  className="certification-img" src={halal} alt="halal"/> 
            </div>
            <p>SIZE (SELECT ONE)</p>
            <p>VARIANT</p>
            <div className="size-section">
                <img className="quantity-image" src={manukaImg} alt="img" />
                <img className="quantity-image" src={manuka9} alt="img" />
                <img className="quantity-image" src={manuka11} alt="img" />
                <img className="quantity-image" src={manuka10} alt="img" />
                <img className="quantity-image" src={manuka13} alt="img" />
                <img className="quantity-image" src={manuka12} alt="img" />
                <img className="quantity-image" src={manuka7} alt="img" />
            </div>
               <div>
                <p>PAYMENT OPTIONS (SELECT ONE)</p>
                <div className="payment-section"> 
                        <button className="payment-button">One-time purchase $109.88USD</button>
                        <button className="payment-button">Subscribe & save 20% $87.90USD</button>
                 </div>
                 <p>SELECT QUANTITY</p>
                 <div className="add-to-cart-section">
                            <button className="quantity-button">- 1 +</button>
                            <button className="addtocart">ADD TO CART</button>
                </div>
                <p>Fast & Free Shipping on order above $30 USD</p>
                </div>
            </div>
            <div className="Desk-top-view">
                <div className="bar">
                    <button className="header-button">WHICH MANUKA IS FOR ME</button>
                    <p>Shop</p>
                    <p>Explore</p>
                    <img src={new_zealand} alt="new zealand logo" className="logo"/>
                    <p>About</p>
                    <p>Rewards</p>
                    <p>Contact</p>
                    <AiOutlineSearch  className="search-icon"/>
                    <BsBag  className="cart-bag"/>
                </div>
                <div className="main-section">
                    <div className="left-section">
                        <div>
                            <img src={manukaImg} alt="manuka"/>  
                        </div>
                        <div className="images-section">
                            <img className="image-section" src={manuka1} alt="manuka1" />
                            <img className="image-section" src={manuka5} alt="manuk2" />
                            <img className="image-section"  src={manuka15} alt="manuka3" />
                            <img className="image-section"  src={manuka6} alt="manuka4" />
                            <img className="image-section"  src={manuka13} alt="manuka5" />
                        </div>
                    </div>
                    <div className="right-section">
                        <h1>Manuka Honey <br />UMF 24+ <br /> MGO 1122+</h1>
                        <button  className="umf-button">What is UMF and MGO</button>
                        <div className="Review-section">
                            <h1>The Optimiser</h1>
                            <img src={Love} alt="love"/>
                        </div>
                        <p>For those times in life when quality comes first. This pure UMF™ 24+ Manuka Honey is powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand and great for almost all uses. It has a full, delicious flavour and your body will love you for it.</p>
                        <div className="certification">
                            <img className="certification-img" src={honeyassociation} alt="association"/>
                            <img  className="certification-img" src={nongmo} alt="nongmo"/>
                            <img  className="certification-img" src={glyp} alt="glyp"/>
                            <img  className="certification-img" src={halal} alt="halal"/> 
                        </div>
                        <p>SIZE (SELECT ONE)</p>
                        <h1>Variant: 125g | 4.4oz</h1>
                        <div className="size-section">
                            <img className="quantity-image" src={manukaImg} alt="img" />
                            <img className="quantity-image" src={manuka9} alt="img" />
                            <img className="quantity-image" src={manuka11} alt="img" />
                            <img className="quantity-image" src={manuka10} alt="img" />
                            <img className="quantity-image" src={manuka13} alt="img" />
                            <img className="quantity-image" src={manuka12} alt="img" />
                            <img className="quantity-image" src={manuka7} alt="img" />
                        </div>
                          <h1>PAYMENT OPTIONS (SELECT ONE)</h1>
                        <div className="payment-section"> 
                            <button className="payment-button">One-time purchase $109.88USD</button>
                            <button className="payment-button">Subscribe & save 20% $87.90USD</button>
                        </div>
                        <h1>SELECT QUANTITY</h1>
                        <div className="add-to-cart-section">
                            <button className="quantity-button">- 1 +</button>
                            <button className="addtocart">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Productpage;