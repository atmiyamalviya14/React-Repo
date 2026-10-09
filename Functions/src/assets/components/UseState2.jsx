import { useState } from "react"

const UseState2 = () => {

    const [num, setNum] = useState(10)
  const change = ()=>{
    setNum(prev =>(prev+1))
    setNum(prev =>(prev+1))
    setNum(prev =>(prev+1))
    setNum(prev =>(prev+1))
  }

  return (
    <div>
        <h1>{num}</h1>
      <button onClick={change}>Click</button>

    </div>
  )
}

export default UseState2    