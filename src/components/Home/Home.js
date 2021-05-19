import Menu from '../Menu/Menu'
import Nav from '../Shared/Nav'

const Home = ({ history }) => {
  return (
    <>
      <Nav history={history} text="What would you like to practice?"></Nav>

      <Menu history={history} />
    </>
  )
}

export default Home
