import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{backgroundColor: "red"}}>
        <h2>Home</h2>
        <Link to={'/login'} style={{color: "#fff"}}>Go to login</Link>
    </div>
  )
}

export default Home