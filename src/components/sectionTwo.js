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
    <div class="flex bg-goldendream-500">
      <div class="w-full p-10 grid grid-cols-3 gap-4">
        {box &&
          box.map((b) => {
            return (
              <div class="bg-white text-blueribbon-500 rounded p-5 text-center">
                {b}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SectionTwo
