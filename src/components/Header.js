import React from 'react'
import PropTypes  from 'prop-types'
import Button from './Button'

const onClick = () =>{
  console.log('click');
}

const Header = ({title}) => {
  return (
    <header className='header'>
      <h1 style={lee}>{title}</h1>
      <Button color='green' text='sewoong' onClick={onClick}/>
      
    </header>
  )
}

Header.defaultProps = {
  title: 'leeee',
}

const lee = {
  color:'red', backgroundColor:'black'
}


export default Header

