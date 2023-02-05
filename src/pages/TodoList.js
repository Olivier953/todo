import { useState } from "react";
import uuid from 'react-uuid';
import Button from "../ui/Button";
import styles from "../pages/TodoList.module.css"
import Input from "../ui/Input";
import Item from "../components/Item"

function TodoList() {

  const [newItem, setNewItem] = useState("")
  const [itemList, setItemList] = useState([])

  function addItem () {

    if (!newItem) {
      alert("Please fill the form");
      return;
    }
    const item = {
      id: uuid(),
      value: newItem
    };

    setItemList(prevList => [...prevList, item]);
    setNewItem("");
  }


    function deleteItem (id) {
      const newArray = itemList.filter(item => item.id !== id)
      setItemList(newArray)
    }
    
  
  return (
    <div className={styles.todoListContent}>
        <div className={styles.inputContent}>
     <h1>Todo List App</h1>

     <Input
        id="task"
        type="text"
        placeholder="Enter your task here..."
        value={newItem}
        onChange={({target})=> setNewItem(target.value)}
        />

      <Button label="Add Todo" onClick={addItem}/>   

    ”3</div>
      <ul className={styles.itemListContent}>
        {itemList.map(todo => 
        
                <div key={todo.id}>
                <Item item={todo} />
                <button onClick={() => deleteItem(todo.id)}>X</button>
                </div>
        
          )}
      </ul>
    </div>

    
  );
}

export default TodoList;
