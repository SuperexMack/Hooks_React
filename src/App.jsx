import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  
  const [counter , todochanger] = useState(1)

  let count;
  return(
    <>
    <button onClick={()=>todochanger(1)}>1</button>
    <button onClick={()=>todochanger(2)}>2</button>
    <button onClick={()=>todochanger(3)}>3</button>
    <button onClick={()=>todochanger(4)}>4</button>
    <button onClick={()=>todochanger(5)}>5</button>
    <TODO id={counter}></TODO>
    </>
  )


}

function TODO({id}){
const [todo , setTODO] = useState({})

// write your useEffect logic here

useEffect(()=>{

fetch("https://sum-server.100xdevs.com/todo?id=" + id)
.then(async(res)=>{
  const json = await res.json(); 
  setTODO(json.todo)
})

} , [todo])


return(

<>

id:{id}
<h1>{todo.title}</h1>
<h4>{todo.description}</h4>

</>



)


}

export default App
