import React from 'react'
import { useState } from 'react';
const  ChildComponent = ({person , age}) => {

   const [divStyle, setDivStyle] = useState({});
   const btn = () => {
     console.log('clicked')
     const newStyle = {
      textDecration: 'line-through',
      

     };
     setDivStyle(newStyle)
   };
  // const [isStrikethrough, setIsStrikethrough] = useState(false);
  // const btn = () =>{
  //   setIsStrikethrough(!isStrikethrough);
  // };
  
  // const textStyle = {
  //   textDecoration: isStrikethrough ? 'line-through' : 'none',
  // };

  
  return (

    <div className='person-card'>
      <div style={divStyle}>
      <h2> Name : {person}</h2>
        <h2>Age : {age}</h2>
        <button onClick={btn}>button</button>
       
      </div>
        
    </div>
       
    
  )
}

export default ChildComponent