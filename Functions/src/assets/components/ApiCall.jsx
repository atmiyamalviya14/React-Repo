import React from 'react'

import axios from 'axios'

const ApiCall = () => {

    //  const getData = async () =>{
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
    //     const data = await response.json()
    //     console.log(response);
    //     console.log(data);
    // }


    const getData = async ()=>{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

        console.log(data);
    }




  return (
    <div>
        <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default ApiCall