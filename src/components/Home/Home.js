import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'

const Home = ({ history }) => {
  return (
    <div>
      <Header></Header>
      <Menu history={history} />
      <Footer></Footer>
    </div>
  )
}

export default Home
