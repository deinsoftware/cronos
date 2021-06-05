import Menu from '../../ui/Menu/Menu'
import Nav from '../../ui/Nav/Nav'

const Home = () => {
  return (
    <div data-testid="home">
      <Nav back={false} text="What would you like to practice?"></Nav>

      <Menu />
    </div>
  )
}

export default Home
