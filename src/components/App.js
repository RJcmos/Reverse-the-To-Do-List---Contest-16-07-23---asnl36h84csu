import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({id,task,createdAt}) {
  return (<tr>
    <td>
      <p>id</p>
        {id}
    </td>
    <td>
      <input />
      {task}
    </td>
    <td>
      <p>createdAt</p>
      {createdAt}
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([
    { id: 'todo1',task:'Task 1',createdAt: '2022-01-01' },
    { id: 'todo2',task:'Task 2',createdAt: '2022-02-02' },
    { id: 'todo3',task:'Task 3',createdAt: '2022-03-03' },
  ]);
  const reverseOrder=()=>{
    setTodos(prevTodos =>[...prevTodos].revers());
  };
  return (
    <div id="main">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          <ToDO key={todo.id} task={todo.task} createdAt={todo.createdAt} />
        </tbody>
      </table>
    </div>
  )
}


export default App;
