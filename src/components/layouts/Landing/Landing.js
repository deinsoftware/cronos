import { useEffect } from 'react'

import Header from '../../sections/Header/Header'
import Footer from '../../sections/Footer/Footer'
import Routes from './Routes.jsx'

import { getTheme } from '../../../utils/theme'

function Landing() {
  useEffect(() => {
    getTheme()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  )
}

export default Landing
