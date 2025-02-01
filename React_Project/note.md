<!-- Note in React -->

1.) create a react project
npm create vite@latest

2.) install dependies
npm install

3.) start project
npm run dev

4.) go to src folder and then App.jsx file and clear all code there
and write rafce
we delete App.css file

5.) open index.css file and clear all code
and write default css property

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#root{
  min-height: 100vh;
  display: flex;
}

6.) after that open index.html file
and change title Gemini Clone

7.) and then go src folder in assets folder and paste assets picture in assests folder

8.) and go src folder inside create components folder and components folder create two folder inside first Sidebar and Main folder

9.) add the file in Sidebar folder Sidebar.jsx
and write Sidebar.jsx file in rafce (boiler code in react)

import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        
    </div>
  )
}

export default Sidebar

10.) and Same Sidebar folder create inside in Sidebar.css file also

11.) open App.jsx file and remove div tag and converting into fregments tag
and write 

import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <>
      <Sidebar/>
    </>
  )
}

export default App

12.) and go to Sidebar.jsx
and with in div we create 2 div
this is top and bottom 

import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* its top part of project */}
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react ...</p>
                </div>
            </div>
        </div>
        {/* its bottom part of project */}
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                <p>Help</p>
            </div>

            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                <p>Activity</p>
            </div>

            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                <p>Settings</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar

13.) go to Sidebar.css
.sidebar{
    
}