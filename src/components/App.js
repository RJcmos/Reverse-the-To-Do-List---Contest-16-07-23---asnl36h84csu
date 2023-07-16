import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({id,task,createdAt}) {
  return (<tr>
    <td>
      <p>id</p>
        {id}
    </td>
    <td>
      <input value={task}/>
      
    </td>
    <td>
      <p>createdAt</p>
      {createdAt}
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);
  const reverseOrder=()=>{
    setTodos(prevTodos =>[...prevTodos].reverse());
  };
  return (
    <div id="main">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          <ToDo key={id} id={id} task={task} createdAt={createdAt} />
        </tbody>
      </table>
    </div>
  )
}


export default App;
