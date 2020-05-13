import React from 'react'
import Page from '../../layout/page'

import One from '../../components/sectionOne'
import Two from '../../components/sectionOne'
import Three from '../../components/sectionOne'

const Home = () => {
    return (
        <Page>
            <div>Home</div>
            <One />
            <Two />
            <Three />
        </Page>
    )
}

export default Home
