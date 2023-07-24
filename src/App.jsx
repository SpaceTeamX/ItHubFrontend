import React from 'react'
import style from './app.module.scss'
import Main from './components/Main/Main'
import Header from './components/Header/Header'


const App = () => {
  return (
    <div className={style.app}>
      <Header/>
      <Main/>
    </div>
  )
}

export default App