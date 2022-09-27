import React from 'react'
import './getintouch.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const GetInTouch = () => {
  return (
    <div className='contactContainer'>
        <h2>Get in touch</h2>
        <p className='contactText'>Reach out to me and I will try to get back to you as soon as possible!</p>
        <div className='contactPrompt'>
        <a href='mailto: andreas.dahlp@gmail.com'>andreas.dahlp@gmail.com</a>
        <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
    
    <div className='freelance'>
        <p className='contactText'>Freelance status:</p>
        <p className='freelanceStatus'>Available for work</p>
    </div>

    <div className='socials'>
        <a href='https://github.com/absolutionwow'><AiFillGithub className='socialsIcon'/></a>
    </div>
    </div>
  )
}

export default GetInTouch