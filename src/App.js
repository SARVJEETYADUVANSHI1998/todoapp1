import React,{useState} from 'react';
import Todo from './containers/todoApp/Todo'

function App() {
     const[name,setName]=useState('radhe');

  return (
    <div className="App">
      <Todo nme ={name} />
    </div>
  );
}

export default App;
