import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components.jsx/Card';

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setUserData(response.data)


  }

  useEffect(function(){
    getData()
  },[index])
  

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold'>Loading...</h3>

  if (userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
         <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='h-screen bg-black text-white p-4'>
      {/* <button
       onClick={()=>{
        getData()
       }}
       className="bg-green-600 text-white px-5 py-2 rounded m-4 active:scale-95"
       >Get Data</button> */}

      <div className='flex h-[82%] flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center
       p-4 gap-6'>
        <button 
          style={{opacity:index == 1 ? 0.5 : 1}}
        onClick={()=>{
            if (index>1){
              setIndex(index-1)
              setUserData([])
            }            
        }}
        className='bg-amber-400 text-black text-sm rounded px-4 py-2 active:scale-95 font-semibold cursor-pointer'>
          Prev</button>
        <h4>Page {index}</h4>
        <button
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }} 
        className='bg-amber-400 text-black text-sm rounded px-4 py-2 active:scale-95 font-semibold cursor-pointer'>
          Next</button>
      </div>
    </div>
  )
}

export default App