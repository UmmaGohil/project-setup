import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <>
                <Link to="/">Home</Link>
                <Link to="/PageTwo">Page Two</Link>
            </>
        )
    }
}

export default Nav
