import React from 'react'
import styles from "./todoitem.module.css" ;

function Todoitem({item,todos,setTodos}) {
  function handleDelete(item){
   
    const newa=todos.filter(todo=> todo !==item)
    setTodos(newa)
    console.log("Deled",item)
   

  }
  function handleClick(name){
   const newArr= todos.map(todo=>todo.name===name?{...todo,done:!todo.done}:todo)
   setTodos(newArr)

  }
  const className=item.done?styles.completed:"";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
       <span className={className} onClick={()=>handleClick(item.name)}>
       {item.name}


       </span>
       
      <span>

<button  onClick={()=>handleDelete(item)} className={styles.delete}>x</button>
</span>
</div>
     
      <hr className={styles.line} />
    </div>
  )
}

export default Todoitem
