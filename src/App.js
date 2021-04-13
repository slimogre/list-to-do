import React, { useState } from 'react';
import ButtonAdd from './ButtonAdd';
import './App.css';
import Task from './Task';
function App() {
  const [tasks, setTasks]=useState([
   {
    id: Math.floor(Math.random() * 100000),
    text: "My first task"
  },
  {
    id: Math.floor(Math.random() * 100000),
    text: "My Second task"
  }]);
  
  function addFunction(addedTask){
    setTasks([...tasks, {text: addedTask, id: Math.floor(Math.random() * 100000)}])
  }
  function removeFunction(id){
    setTasks(tasks.filter(el=>el.id!==id))
  }
  function editFunction(id,edited){
    setTasks(tasks.map(el => el.id === id ? {id, text: edited} : el))
  }
  return (
    <div className="App">
      <h1 style={{color:'#008B8B',marginBottom: '70px'}}>Slim you should To Do</h1>
        <ButtonAdd addFunction={addFunction}/>
        {tasks.map((el)=> <Task elem={el} removeFunction={removeFunction} editFunction={editFunction} key={el.id}/>)}
    </div>
  );
}

export default App;