import React from 'react'
import './Sidebar.css'
import Category from '../Sidebar/Category/Category'
import Price from '../Sidebar/Price/Price'
import Colors from '../Sidebar/Colors/Colors'

function Sidebar({handleChange}) {
  return (
    <section className='sidebar'>
      <div className='logo-container'>
        <h1>logo</h1>
      </div>
     <Category handleChange={handleChange}/>
     <Price handleChange={handleChange}/>
     <Colors handleChange={handleChange}/>
    </section>
  )
}

export default Sidebar
