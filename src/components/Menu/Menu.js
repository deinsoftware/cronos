import './Menu.css'

const Menu = ({ history }) => {
  const handleOnClick = (e) => {
    const { id } = e.target.dataset
    history.push(`/${id}`)
  }

  return (
    <>
      <div className="content">
        <ul>
          <li data-id="n2w" onClick={handleOnClick}>
            Number to Words
          </li>
          <li data-id="y2w" onClick={handleOnClick}>
            YearToWords
          </li>
          <li data-id="d2w" onClick={handleOnClick}>
            Date to Words
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu
