import './Menu.css'

const Menu = ({ history }) => {
  const handleOnClick = (e) => {
    const { id } = e.target.dataset
    history.push(`/${id}`)
  }

  return (
    <>
      <div className="title">
        <h1>What would you like to practice?</h1>
      </div>

      <div className="content">
        <ul>
          <li data-id="n2w" onClick={handleOnClick}>
            Number to Words
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu
