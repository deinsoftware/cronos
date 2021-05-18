import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div>
        Created by <a href="https://github.com/equiman">equiman</a>
      </div>
      <div>2021 © {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer
