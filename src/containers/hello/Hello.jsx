import React from 'react'
import './hello.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import profilepic from '../../assets/profilepic.jpg'

const Hello = () => {
  return (
    <div>
    <div className='introduction'>
    <h1 class="slide-top06">Hi!</h1>
    <h1 class="slide-top1">I'm Andreas👋</h1>
    
    </div>
    <div>
    <p className='subtext'>I'm studying frontend development at Aarhus Business Academy. I am currently looking to expand my skillset, so I can provide my employers and customers with the best experience and results. I love using cutting edge technology and I'm never afraid of new challenges. </p>
    </div>
    <div className='ctaContainer'>
    <a href='mailto: andreas.dahlp@gmail.com'>Contact me to work with me</a>
    <AiOutlineArrowRight></AiOutlineArrowRight>
    </div>
    <div className='profileContainer'>
    <img className='profilePic' src={profilepic}></img>
    </div>
    </div>
  )
}

export default Hello

