import 'bootswatch/dist/slate/bootstrap.min.css';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const items = [{ id: 1, title: "create todo application", isDone: true }, { id: 2, title: "test functionality", isDone: true }, { id: 3, title: "add some tasks", isDone: false }]

function App() {
  const [toDoItems, setToDoItems] = useState([...items])
  const [newItemName, setNewItemName] = useState("")

  const deleteItem = (index) => {
    setToDoItems([...toDoItems.slice(0, index), ...toDoItems.slice(index + 1)])
  }

  const toggleDone = (index) => {
    setToDoItems([...toDoItems.slice(0, index), { ...toDoItems[index], isDone: !toDoItems[index].isDone }, ...toDoItems.slice(index + 1)])
  }

  const onAddItemInputChange = (event) => {
    setNewItemName(event.target.value.trim())
  }

  const addNewToDoItem = () => {
    setToDoItems([...toDoItems, {id:Math.random(), title:newItemName, isDone:false}])
    setNewItemName("")
  }

  return (
    <div className="App">
      <div class ="inner-block">
        <p>todo list items:</p>
        <div class ="add-todo-block">
          <input class ="todo-input"
            name="addItem"
            type="text"
            value={newItemName} onChange={onAddItemInputChange} />
            <button type="button" class="btn btn-success" onClick={addNewToDoItem}>Add</button>
        </div>
        <div>
          {toDoItems.map((item, index) => <div class="item-block" key={item.id}> <label class ={`${item.isDone? "item-completed":""}`}>
            {item.title}
            <input
              name={`isDone-${item.id}`}
              type="checkbox"
              class = "item-checkbox"
              checked={item.isDone}
              onChange={() => toggleDone(index)} />
          </label>
            <div onClick={() => deleteItem(index)}>x</div>
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
