import { useState } from "react"

const UseState = () => {

    const [num, setNum] = useState(2)
  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  function jumpFiveNum(){
    setNum(num+5)
  }
  return (
    <div>
        <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpFiveNum}>Jump by 5</button>
    </div>
  )
}

export default UseState