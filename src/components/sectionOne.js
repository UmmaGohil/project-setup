import React, { useEffect } from 'react'
import Banner from '../images/banner.png'
import { useSelector, useDispatch } from 'react-redux'
import { viewData } from '../store/actions/data.action'

const SectionOne = () => {
    const dispatch = useDispatch()

    const title = useSelector((state) => state.dataReducer.getData.title)
    const subtitle = useSelector((state) => state.dataReducer.getData.subtitle)

    useEffect(() => {
        dispatch(viewData())
    }, [dispatch])
    return (
        <div class="flex bg-perano-500">
            <div class="w-1/2 p-10">
                <h1 class="  sm:text-lg md:text-4xl lg:text-6xl text-blueribbon-500">
                    {title}
                </h1>
                <h3 class="text-2xl text-white">{subtitle}</h3>
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
