
import './App.css';
import { useEffect, useState } from 'react';
import { getAllTodo, addTodo, updateTodo, deleteTodo } from './utils/Api';
import Todo from './components/Todo';

function App() {
  const [todo, setTodo] = useState([])
  const [text, setText] = useState("")
  const [isupdating, setIsUpdating] = useState(false)
  const [todoId, setTodoId] = useState("")


  useEffect(() => {
    getAllTodo(setTodo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)


  }


  return (
    <div className="App">


      <div className="container">
        <h1>Todo App</h1>

        <div className="top">
          <input type="text" placeholder="Add Todo and  Description:" required value={text}
            onChange={(e) => setText(e.target.value)}
          />


          <div className="add"
            onClick
            ={isupdating ?
              () => updateTodo(todoId, text, setTodo, setText, setIsUpdating)
              : () => addTodo(text, setText, setTodo)}>
            {isupdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">

          {todo.map((item) =>
            <Todo key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />

          )}


        </div>
      </div>
    </div>
  );
}

export default App;
