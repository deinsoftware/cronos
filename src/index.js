import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/Header/Header'
import Routes from './Routes'
import Footer from './components/Footer/Footer'
import { handleResize } from './utils/media'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <main>
      <Routes />
    </main>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
)

window.addEventListener('resize', handleResize)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
