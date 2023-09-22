import React , {useEffect} from 'react'
import {v4 as uuid} from 'uuid'

export const Form = ({input,todos,setInput,setTodos,edit,setEditTodo}) => {
    const onInputchange = (event) => {
        setInput(event.target.value)
    }
    const updateTodo = (task,id,completed) =>{
        const newTodo = todos.map((todo)=>(
            todo.id === id ? {task,id,completed} : todo
        ))
        setTodos(newTodo)
        setEditTodo("")
    }
    useEffect(() => {
      if(edit){
        setInput(edit.task)
      }else{
        setInput("")
      }
    }, [setInput, edit])
    
    const onFormSubmit = (event) => {
        event.preventDefault()
        if(!edit){
            setTodos([...todos,{id:uuid(), task:input, completed:false}])
        setInput("")
        } else {
            updateTodo(input, edit.id, edit.completed)
        }
        
    }

  return (
    <>
    <form onSubmit={onFormSubmit}>
            <div className='flex py-4'>
            <i class="fa-solid fa-book bg-[#24A3B6] text-white px-3 rounded-l-md  py-2"></i>
            <input type="text" placeholder='AddTodo' value={input} onChange={onInputchange} name="" id="" className=' px-2 border-2 border-light-grey-700 w-full'/>
            </div>
            <div>
                <button type='submit' className='bg-[#24A3B6] w-full p-1 flex items-center text-white justify-center rounded'>Submit</button>
            </div>
    </form>
    
    
    </>
  )
}
