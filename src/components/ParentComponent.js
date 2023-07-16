import React from 'react'
import ChildComponent from './ChildComponent'
const ParentComponent = () => {
    
  return (
    <div className='person-container'>

        <ChildComponent person={"Samrat"} age={"19"}/>
        <ChildComponent person={"Anushka"} age={"20"}/>
        <ChildComponent person={"Bikram"} age={"21"}/>
        <ChildComponent person={"Sneha"} age={"19"}/>
        
    </div>
  )
}

export default ParentComponent