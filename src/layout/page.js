import React from 'react'
import Nav from '../components/nav'
import PropTypes from 'prop-types'
import Footer from '../components/footer'

const propTypes = {
    children: PropTypes.node,
}

const Page = ({ route, children }) => {
    return (
        <>
            <Nav route={route} />
            <div className="w-full">{children}</div>
            <Footer />
        </>
    )
}

Page.propTypes = propTypes

export default Page
