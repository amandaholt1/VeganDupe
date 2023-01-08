import React from 'react';
import './Makeup.css';
import foundation from '../../assets/foundation.png';
import blush from '../../assets/blush.png';
import concealer from '../../assets/concealer.png';
import contour from '../../assets/contour.png';
import palette from '../../assets/palette.png';
import mascara from '../../assets/mascara.png';
import liner from '../../assets/liner.png';
import brows from '../../assets/brows.png';
import stick from '../../assets/stick.png';
import lipliner from '../../assets/lipliner.png';
import gloss from '../../assets/gloss.png';
import liquid from '../../assets/liquid.png';
import { Routes, Route, Link } from "react-router-dom";


const Makeup = () => {
  return (
    <div className='area'>
      <div className='face'>Face 
      <Link to ='/Makeup/Foundation'>
      <h2 className='foundation'>
      <div className = "foundation_pic">
          <img src = {foundation} alt = "foundation_pic" />
        </div>
        Foundation</h2>
        </Link>
        <Link to ='/makeup/concealer'>
      <h2 className='concealer'>
      <div className = "concealer_pic">
          <img src = {concealer} alt = "concealer_pic" />
        </div>
        Concealer</h2>
        </Link>
        <Link to ='/makeup/contour'>
       <h2 className='contour'>
      <div className = "contour_pic">
          <img src = {contour} alt = "contour_pic" />
        </div>
        Contour</h2>
        </Link>
        <Link to ='/makeup/blush'>
      <h2 className='blush'>
      <div className = "blush_pic">
          <img src = {blush} alt = "blush_pic" />
        </div>
        Blush</h2>
        </Link>
      </div>

      <div className='eyes'>Eyes
      <Link to ='/makeup/palette'>
      <h2 className='palette'>
      <div className = "palette_pic">
          <img src = {palette} alt = "palette_pic" />
        </div>
        Palettes</h2>
        </Link>
        <Link to ='/makeup/mascara'>
      <h2 className='mascara'>
      <div className = "mascara_pic">
          <img src = {mascara} alt = "mascara_pic" />
        </div>
        Mascara</h2>
        </Link>
        <Link to ='/makeup/liner'>
       <h2 className='liner'>
      <div className = "liner_pic">
          <img src = {liner} alt = "liner_pic" />
        </div>
        Liner</h2>
        </Link>
        <Link to ='/makeup/brows'>
      <h2 className='brows'>
      <div className = "brows_pic">
          <img src = {brows} alt = "brows_pic" />
        </div>
        Brows</h2>
        </Link>
      </div>

      <div className='lips'>Lips
      <Link to ='/makeup/stick'>
      <h2 className='stick'>
      <div className = "stick_pic">
          <img src = {stick} alt = "stick_pic" />
        </div>
        Lipstick</h2>
        </Link>
        <Link to ='/makeup/lipliner'>
      <h2 className='lipliner'>
      <div className = "lipliner_pic">
          <img src = {lipliner} alt = "lipliner_pic" />
        </div>
        Lip Liner</h2>
        </Link>
        <Link to ='/makeup/gloss'>
       <h2 className='gloss'>
      <div className = "gloss_pic">
          <img src = {gloss} alt = "gloss_pic" />
        </div>
        Lip Gloss</h2>
        </Link>
        <Link to ='/makeup/liquid'>
      <h2 className='liquid'>
      <div className = "liquid_pic">
          <img src = {liquid} alt = "liquid_pic" />
        </div>
        Liquid Lipstick</h2>
        </Link>
      </div>
      
      
      </div>
     

  )
}

export default Makeup