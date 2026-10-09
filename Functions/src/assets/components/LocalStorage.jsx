import React from 'react'

const LocalStorage = () => {

    const user = {
        username: 'Atmiya',
        age:45,
        cuty:'Itarsi'
    }

    localStorage.setItem('user',JSON.stringify(user))

   const username = JSON.parse(localStorage.getItem('user'))
   console.log(username);


  return (
    <div>
    </div>
  )
}

export default LocalStorage 