import React from 'react'
import Page from '../../layout/page'

import One from '../../components/sectionOne'
import Two from '../../components/sectionTwo'

const Home = () => {
    return (
        <Page>
            <div class="flex w-full flex-col">
                <div class="w-full">
                    <One />
                </div>
                <div class="w-full">
                    <Two />
                </div>
            </div>
        </Page>
    )
}

export default Home
