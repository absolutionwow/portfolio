import React from 'react'
import './skills.css'
import adAI from '../../assets/adAI.svg'
import adXD from '../../assets/adXD.png'
import adPS from '../../assets/adPS.svg'
import adPR from '../../assets/adPR.png'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import react from '../../assets/react.svg'
import figma from '../../assets/figma.png'
import wp from '../../assets/wp.png'
import html from '../../assets/html.svg'

const Skills = () => {
  return (
    <div>
    <h2>Skills</h2>
    <div className='skillsBG'>
    <div>
    <p className='highlightSkill'>HTML5</p>
        <img src={html} alt="html5"/>
        
        </div>
        <div>
        <p className='highlightSkill'>CSS 3</p>
        <img src={css} alt="css"/>
        
        </div>
        <div>
        <p className='highlightSkill'>JavaScript</p>
        <img src={js} alt="javascript"/>
        
        </div>
        <div>
        <p className='highlightSkill'>React</p>
        <img src={react} alt="react"/>
        
        </div>
        <div>
        <p className='highlightSkill'>Wordpress</p>
        <img src={wp} alt="wordpress"/>
        
        </div>
        <div>
        <p className='highlightSkill'>Figma</p>
        <img src={figma} alt="figma"/>
        
        </div>
        <div>
        <p className='highlightSkill'>Adobe Photoshop</p>
        <img src={adPS} alt="Adobe Photoshop"/>
        
        </div>
        <div>
        <p className='highlightSkill'>Adobe Illustrator</p>
        <img src={adAI} alt="Adobe Illustrator"/>
        
        </div>
        <div>
        <p className='highlightSkill'>Adobe Premiere Pro</p>
        <img src={adPR} alt="Adobe Premiere Pro"/>
        
        </div>
        <div>
        <p className='highlightSkill'>Adobe <br/>XD</p>
        <img src={adXD} alt="Adobe XD"/>
        
        </div>
    </div>
    
  
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Skills
