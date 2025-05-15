import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList'

function App() {
 

  return (
    <>
    <div className='display-page'>
     <TaskList />

    </div>
    </>
  )
}

export default App
