import React from 'react'
import Todoitem from './Todoitem';
import styles from './todolist.module.css'
function TodoList({todos,setTodos}) {
  const sortedTodos=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className={styles.list}>
       {sortedTodos.map(item=><Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos}/>)}
      
    </div>
  )
}

export default TodoList
