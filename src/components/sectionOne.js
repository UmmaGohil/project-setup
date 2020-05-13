import React from 'react'
import Banner from '../images/banner.png'
const SectionOne = () => {
    return (
        <div class="flex bg-perano-500">
            <div class="w-1/2 p-10">
                <h1 class="  sm:text-lg md:text-4xl lg:text-6xl text-blueribbon-500">
                    Tailwind + React Project
                </h1>
                <h3 class="text-2xl text-white">Here is some sub-text</h3>
            </div>
            <div class="w-1/2">
                <img
                    src={Banner}
                    alt="Banner"
                    class="object-contain sm:object-scale-down md:object-scale-down lg:object-scale-down xl:object-scale-down"
                />
            </div>
        </div>
    )
}

export default SectionOne
