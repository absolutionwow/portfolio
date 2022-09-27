import React from 'react'

import {DPlogo,} from './components'
import {Hello, Skills, Recent, GetInTouch, Navbar, Articles} from './containers'

const App = () => {
  return (
    <div>
    <Navbar />
        <DPlogo />
        <Hello />
        <Skills />
        <Recent />
        <Articles />

        <GetInTouch />
    </div>
  )
}

export default App