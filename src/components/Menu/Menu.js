const Menu = ({ history }) => {
  const handleOnClick = (e) => {
    const { id } = e.target.dataset
    history.push(`/${id}`)
  }

  return (
    <div>
      <ul>
        <li data-id="n2w" onClick={handleOnClick}>
          Number to Words
        </li>
      </ul>
    </div>
  )
}

export default Menu
