import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, {useState} from "react"

export default function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <nav className="nav">
      <Link to="/" className="site-title" onClick={handleClick}>
        BMW
      </Link>
      <ul className={click ? "nav-list active" : "nav-list"}>
        <CustomLink to="/pricing" className="nav-link" onClick={handleClick}>Pricing</CustomLink>
        <CustomLink to="/about" className="nav-link" onClick={handleClick}>About</CustomLink>
      </ul>
      
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times":"fas fa-bars"}></i>
      </div>
    </nav>
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
