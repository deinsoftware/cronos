import Menu from '../Menu/Menu'
import Breadcrumbs from '../Shared/Breadcrumbs'

const Home = ({ history }) => {
  return (
    <>
      <Breadcrumbs
        history={history}
        text="What would you like to practice?"
      ></Breadcrumbs>

      <Menu history={history} />
    </>
  )
}

export default Home
