import React from 'react'
import dplogo from '../../assets/dplogo.png'
import './dplogo.css'

const DPlogo = () => {
  return (
    <div class="logoContainer">
    <img class="logo" src={dplogo} alt="Logo with DP in the middle, meaning Dahl Pedersen"/>
    </div>
  )
}

export default DPlogo