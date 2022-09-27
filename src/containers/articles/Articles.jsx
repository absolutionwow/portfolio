import React from 'react'
import adobelogo from '../../assets/adobelogo.png'
import zoltarpattern from '../../assets/zoltarpattern.svg'
import wowcolorblind from '../../assets/wowcolor.jpg'
import './articles.css'

const Articles = () => {
  return (
    <div>
        <h2>Articles</h2>
        <div className='articleContainer'>
        <h3>On accessibility</h3>
        <img className='articleImg' src={wowcolorblind} alt="World of Warcraft uses a wheel of colors to better help colorblind players."/>
        <p className='articleText'>Although great progress is being made to raise awareness for accessibility in web development, I still feel like so much more could be done. Video games like World of Warcraft have managed to implement
        a wheel, that allows the user to adjust the colors based on their colorblindness. I could be mistaken, but I haven't seen anything like this for web development, which is a shame.  I believe this is the future for web development as well, although I don't think we will see it anytime soon on a large scale. I'm not saying that designers might as well stop using colors, because people can just chose themselves. I do however believe that changes will be made to accomodate for something like this, either directly on the website or through a browser extension.</p>
        </div>
        <div className='articleContainer'>
        <h3>A scrapped project</h3>
        <img className='articleImg' src={zoltarpattern} alt="Fortuneteller with turban, styled as a pattern" />
        <p className='articleText'>When I was first starting to learn react, I was making a project called "Zoltar Chats". The idea was that you would chat with a fortune teller who you would chat with. He would ask you for your starsign and give you a fortunetelling based of that, at least that was the idea. As I started to get the hang of React I lost interest in the project and it just kinda fell through.</p>
        </div>
        <div className='articleContainer'>
        <h3>My love/hate relationship with Adobe</h3>
        <img className='articleImg' src={adobelogo} alt="The logo of Adobe" />
        <p className='articleText'>Adobe recently aquired Figma for $ 20 billion!!! I'm personally sceptical about this. Adobe is already an industry standard in tech, and them buying out the competetion like that does not nessecarily bode well for the furture. I personally have a love/hate relationship with adobe products. I usually feel like they are needlessly complicated, but at the same time there is no doubt about the capabilities of the programs. I do hope Figma remains unchanged despite the purchase, as I much prefer it to Adobe XD.</p>
        </div>
    </div>
  )
}



export default Articles