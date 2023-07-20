import React from 'react'
//import { Header } from 'semantic-ui-react'

const Userlog = () => {

    const userName = JSON.parse(localStorage.getItem("user"))

  return (
    <>
   <p style={{fontSize:15,color:'red'}}>Welcome {userName.name}</p>
   </>
  )
}

export default Userlog