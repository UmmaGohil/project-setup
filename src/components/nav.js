import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Nav = () => {
  return (
    <Router>
      <nav>
        <ul className="flex bg-white text-deepblush-500 w-full justify-center p-3">
          <li className=" mr-6 ">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-6">
            <Link to="/PageTwo">Page Two</Link>
          </li>
        </ul>
      </nav>
    </Router>
  )
}

export default Nav
