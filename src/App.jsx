import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

   const [todos , setTODO] = useState([])
  
  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then((async (res)=>{
      const json = await res.json()
      setTODO(json.todos)
    }))
  } , [])


  // using useEffect we stop the program to run infinitely we make to run the program to our choise
  // if dependency in useEffect is just empty i.e [] so the program will run only once

  return (
    <>
      {todos.map(todo=>
       <TODO key={todo.id} title={todo.title} description={todo.description}></TODO>
      )}
    </>
  )
}


function TODO({title , description}){
  return(
    <>
  <h1>{title}</h1>
  <h1>{description}</h1>
  </>
  )
}

export default App
