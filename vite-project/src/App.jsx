import React, { useRef, useState } from "react"
import Home from "./home"



const App = () => {
  const inref=useRef()
  const h2Ref=useRef()
  const [counter,setCounter]=useState(0)
  const onButtonClick=()=>{
    console.log(inref.current.value)
    h2Ref.current.setAttribute('style','color:red',)
  }
  React.useEffect(()=>{
  console.log('hii','useEffect')
  },[counter])
  return (
    <div>
     <p onClick={()=>setCounter(counter+1)}>{counter}</p>
     <div>
      <h2 ref={h2Ref}>kello</h2>
     </div>
      {counter===0 && <Home/>}
      <input type='text' ref={inref}/>
      <button onClick={onButtonClick}>submit</button>
    </div>
    
  )
}

export default App