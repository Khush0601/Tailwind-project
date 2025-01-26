import React from "react"

const Home = () => {
    React.useEffect(()=>{
        console.log('hyyyyyy')
        return ()=>{
            alert('component unmount')
        }
    },[])
  return (
    <div>home</div>
  )
}

export default Home