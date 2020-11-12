import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { viewData } from '../store/actions/data.action'

const Footer = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.dataReducer.getData.footer)

  useEffect(() => {
    dispatch(viewData())
  }, [dispatch])

  return (
    <div class="flex flex-col h-screen justify-between bottom-0 w-full bg-blueribbon-800 text-deepblush-500 p-5 text-center">
      <div class="grid grid-flow-col grid-cols-3 gap-4 ">
        <div>
          <p class="font-bold">Help</p>
          {data &&
            data.help.map((h) => {
              return <p>{h}</p>
            })}
        </div>
        <div>
          {data &&
            data.about.map((a) => {
              return <p>{a}</p>
            })}
        </div>
        <div>
          <p class="font-bold">My Account</p>
          {data &&
            data.myAccount.map((a) => {
              return <p>{a}</p>
            })}
        </div>
      </div>
    </div>
  )
}

export default Footer
