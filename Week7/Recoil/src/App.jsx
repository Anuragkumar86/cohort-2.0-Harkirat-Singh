import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, NeworkAtom, notificationAtom, totalNotification } from './atom'

function App() {


  return (

    <RecoilRoot>
      <MyApp />
    </RecoilRoot>
  )
}

function MyApp(){
  const networkNotificationCount = useRecoilValue(NeworkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const messageCount = useRecoilValue(messagingAtom)
  // console.log(networkNotificationCount)
  const total = useRecoilValue(totalNotification)
  return (
  <div> 
    <button>Home </button>
    <button >Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount}) </button>
    <button>Message ({messageCount})</button>
    <button>Jobs ({jobsCount})</button>
    <button>Notification ({notificationCount})</button>
    <button>Me ({total})</button>
  </div>
  )
}

export default App
