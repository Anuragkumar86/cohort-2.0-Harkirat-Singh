import { useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./stores/atoms/count";


function App() {

  return (
    <div>
      <RecoilRoot>
      <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer  />
    <Buttons  />
    <Iseven></Iseven>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Iseven(){
  const count = useRecoilValue(countAtom);
  if (count % 2 == 0){
    return <div>
      <b>The number is even</b>
    </div>
  }
}
function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App