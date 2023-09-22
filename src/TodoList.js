import React from 'react'

export const TodoList = ({todos, setTodos,setEditTodo}) => {

  const handleComplete = (todo) => {
    setTodos(
        todos.map((item) => {
            if(item.id === todo.id){
                return {...item, completed:!item.completed}
            }
            return item
        })
    )
  } 
  
  const handleEditTodo = ({id}) => {
    const findTodo  = todos.find((todo)=> todo.id === id)
    setEditTodo(findTodo)
  } 
  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo)=> todo.id !== id))
  }  
  return (
    (todos.map((todo) => (
        <div key={todo.id} className='flex items-center justify-between  border-2 border-lightgrey-700 my-1 px-4 py-3 w-full'>
        <p  onChange={(event) => event.preventDefault()} className={`${todo.completed ? 'line-through text-red-500' : ""}`} >{todo.task}</p>
        <div className='flex gap-4 items'>
            <input checked={todo.completed} type="checkbox" onClick={()=> handleComplete(todo)}  />
           <button onClick={()=> handleEditTodo(todo)}><i class="fa-solid fa-pencil text-orange-400"></i></button> 
           <button onClick={()=> handleDelete(todo)}><i class="fa-solid fa-trash text-red-500"></i></button> 
        </div>
    </div>
    )))
   
  )
}

