import { useState } from "react";
import React from "react";


const Model = () => {
  const [showModel, setShowModel] = useState(false);

  const MyModel =()=>{
    return <>
      <h2>stay tunned</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, est perferendis. Odit!</p>
      <button onClick={()=>setShowModel(false)}>Accept it</button>
    </>
  }
  return (
    <>
    <button onClick={()=> setShowModel(true)}>Click Me</button>
    {showModel && <MyModel/>}
    </>
  
  )
}

export default Model
