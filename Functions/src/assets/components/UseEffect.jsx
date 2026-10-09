import { useEffect, useState } from "react"

const UseEffect = () => {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(100)
    useEffect(function(){
        console.log('Use Effect is Running');
    },[num])

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

   useEffect(function(){
    console.log('A change');
   })
  return (
    <div>
        <h1> num {num}</h1>
        <h1> num2 {num2}</h1>
        <button onMouseLeave={()=>{
            setNum(num+1)
        }}
        onMouseEnter={()=>{
            setNum2(num2+10)
        }}>Click</button>


        <h1>{a}</h1>
        <h1>{b}</h1>
        <button
        onClick={()=>{
            setA(a+1)
        }}>Change A</button>
        <button
        onClick={()=>{
            setB(b+1)
        }}>Change B</button>
    </div>
  )
}

export default UseEffect
