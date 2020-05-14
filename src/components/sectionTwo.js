import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { viewData } from '../store/actions/data.action'

const SectionTwo = () => {
    const dispatch = useDispatch()

    const box = useSelector((state) => state.dataReducer.getData.box)

    useEffect(() => {
        dispatch(viewData())
    }, [dispatch])
    return (
        <div class="h-screen bg-goldendream-500 text-gray-800 p-10">
            <div class="grid grid-cols-3 gap-4">
                {box === undefined ? (
                    <p>loading</p>
                ) : (
                    <>
                        {box.map((b) => {
                            return (
                                <div class="bg-white text-blueribbon-500 rounded p-5 text-center">
                                    {b}
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
        </div>
    )
}

export default SectionTwo
