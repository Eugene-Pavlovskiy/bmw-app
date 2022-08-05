import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, {useState} from "react"
import logo from "./img/bmw-logo.png"

export default function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <header>
      <nav className="nav">
        <Link to="/" className="site-title" onClick={handleClick}>
          <img src={logo} className="nav-logo" alt="logo" />
        </Link>
        <ul className={click ? "nav-list active" : "nav-list"}>
          <CustomLink to="/pricing" className="nav-link" onClick={handleClick}>Pricing</CustomLink>
          <CustomLink to="/about" className="nav-link" onClick={handleClick}>About</CustomLink>
        </ul>
        
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times":"fas fa-bars"}></i>
        </div>
      </nav>
    </header>
    
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
