import React from 'react'
import './Home.css';
import {Footer, About, SkinCare, Makeup, Foundation} from '../../containers';
import {useState} from 'react' 
import makeupData from '../../makeupData.json' 
import { NavLink } from 'react-router-dom';
import {Search} from '../../components';


const Home = () => {

  return (
    <div className = "vegan_header section_padding" id="home">
    <div className ="vegan_header-content">
      <h1 className = "gradient__text">
        Find vegan alternatives to your everyday beauty favorites
        </h1>
        <p>All product recommendations are vegan. A green checkmark will be next to products where all the products from that brand are 100% vegan.</p>
        <div className = "vegan_header-content_input">
        <Search placeholder="Enter product" data = {makeupData} />     
       </div>
       </div>
       {/*}
       <div className = "vegan_header-content_pic">
          <img src = {headerpic} alt = "headerpic" />
        </div>
  */}
    </div>
  )
}

export default Home

