import React from 'react'
import Nav from '../components/nav'
import PropTypes from 'prop-types'
import Footer from '../components/footer'

const propTypes = {
    children: PropTypes.node,
}

const Page = ({ route, children }) => {
    return (
        <div className="flex content-between flex-wrap  h-5">
            <Nav route={route} />
            <div className="w-full h-10  pl-20 pr-2">{children}</div>
            <Footer />
        </div>
    )
}

Page.propTypes = propTypes

export default Page
