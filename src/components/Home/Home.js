import Menu from '../Menu/Menu'
import Nav from '../Nav/Nav'

const Home = ({ history }) => {
  return (
    <div data-testid="home">
      <Nav back={false} text="What would you like to practice?"></Nav>

      <Menu />
    </div>
  )
}

export default Home
