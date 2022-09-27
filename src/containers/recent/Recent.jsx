import React from 'react'
import roselogo from '../../assets/roselogo.png'
import teamdream from '../../assets/teamdream.png'
import './recent.css'
import grundfos from '../../assets/grundfoskollegiet.png'


const Recent = () => {
  return (
    <div>
    <h2>Recent work</h2>
    <div className='recentItem'>
    <div className='recentImgContainer'>
    <a href='https://www.rosenteatret.dk/'><img className='recentImg' src={roselogo} /></a>
    </div>
    <h3>Rosenteatret</h3>
    <div className='tagContainer'>
      <p className='tag'>Wordspress</p>
      <p className='tag'>Work in progress</p>
     
    </div>
    <p className='recentDescription'>Rosenteatret is an amateur theatre in the middle of Aarhus. I am currently trying to help them with revitalizing their website and creating a better user experience.</p>
    </div>

    <div className='recentItem'>
    <div className='recentImgContainer'>
    <a href='https://xd.adobe.com/view/88c7d0c1-98d6-4e1c-be5f-64a42577bfc9-dd94/?fbclid=IwAR2-5_Vn63AOx6d-CqbVjMBZzuVKgvOJsmQ7waRkdVBTi0sNg4mrRNrelcU'><img className='recentImg' src={grundfos} /></a>
    </div>
    <h3>Grundfos Kollegiet</h3>
    <div className='tagContainer'>
      <p className='tag'>Adobe XD</p>
      <p className='tag'>Prototyping</p>
     
    </div>
    <p className='recentDescription'>Grundfos Kollegiet was a group project during my second semester at Aarhus Business Academy. The task was to design a tablet solution for a dorm in Aarhus.</p>
    </div>

    <div className='recentItem'>
    <div className='recentImgContainer'>
    <a href='https://www.facebook.com/profile.php?id=100054358248232'><img className='recentImg' src={teamdream} /></a>
    </div>
    <h3>Team Dream</h3>
    <div className='tagContainer'>
      <p className='tag'>Hobby</p>
      <p className='tag'>Photoshop</p>
      <p className='tag'>Premiere Pro</p>
      <p className='tag'>Greenscreen</p>
     
     
    </div>
    <p className='recentDescription'>I am helping a friend of mine promote the games for his second division football team: "Team Dream". We filmed some player introductions a little while back on a greenscreen, which I am currently working on turning into a video.</p>
    </div>


</div>
  )
}

export default Recent