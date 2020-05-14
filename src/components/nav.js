import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul class="flex bg-white text-deepblush-500 w-full justify-center p-3">
                    <li class=" mr-6 ">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="mr-6">
                        <Link to="/PageTwo">Page Two</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav
