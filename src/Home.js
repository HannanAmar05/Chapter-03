import './index.css';
import React, {useState,useEffect} from 'react'
import {Form} from './Form'
import {TodoList} from './TodoList'
// #d93649 button merah

export const Home = () => {
  const [input, setInput] = useState("")
  const [checkFilter, setCheckFilter] = useState("all")
  const [search, setSearch] = useState("")
  const [originalTodos, setOriginalTodos] = useState([]); 
  const [todos, setTodos] = useState([{
    id: 1,
    task: "Nyuci mobil",
    completed: true
  }, {
    id: 2,
    task: "Memberi makan kucing",
    completed: true
  }, {
    id: 3,
    task: "Olahraga 10 menit",
    completed: false
  }, {
    id: 4,
    task: "Sarapan sereal",
    completed: true
  }, {
    id: 5,
    task: "Belanja harian",
    completed: false
  }, {
    id: 6,
    task: "Ngeprint tugas",
    completed: true
  }, {
    id: 7,
    task: "Bayar tagihan bulanan",
    completed: true
  }, {
    id: 8,
    task: "Berangkat kuliah",
    completed: false
  }, {
    id: 9,
    task: "Les bahasa Inggris",
    completed: true
  }, {
    id: 10,
    task: "Ke rumah Sabrina",
    completed: false
  }])
  const [edit, setEditTodo] = useState(null)
  
  // const Data = 
  const deleteAll = () => {
    setTodos([])

  }

  useEffect(() => {
    setOriginalTodos(todos);
  }, [todos]);

  const deleteDoneTask = () => {
    setTodos(todos.filter((todo)=> todo.completed !== true))
  }


  const showCheckItem = () => {
    let dataFilter = todos;
    if(checkFilter === 'todo'){
      dataFilter = dataFilter.filter((todo)=> !todo.completed)

    }
    else if (checkFilter === 'done'){
      dataFilter = dataFilter.filter((todo)=> todo.completed)
    }
    return dataFilter
  }

  const filterTodos = showCheckItem()

  const searchTodos = (searchTerm) => {
  return todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

    const handleSearch = () => {
    if(search.trim() === ""){
      setTodos(originalTodos)
    }
    else{
      const filteredTodos = searchTodos(search);
      setTodos(filteredTodos);
    }
    };

  return (
    <>
    <div className='bg-[lightgray] flex justify-center mx-auto w-[46%] items-center  mt-4 rounded-[19px]'>
      <div className='bg-[white] my-4 px-4 w-[96%] py-5'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='mb-3'>TodoSearch</h1>
          <div className='flex gap-8 border-2 border-lightgrey-700 px-8 py-4 w-full'>
            <div className='flex w-full flex-col gap-4'>
              <div className='flex'>
                <p className='bg-[#24A3B6] text-white px-3 rounded-l-md  py-1'><i class="fa-solid fa-magnifying-glass"></i></p>
                <input type="text" placeholder='Search Todo' value={search} onChange={(e)=> setSearch(e.target.value)} className='px-2 w-full border-#D0D0D0-700 border-2' />
              </div>
              <button onClick={handleSearch} className='bg-[#24A3B6] w-full p-1 flex items-center text-white justify-center rounded'>Search</button>
            </div>
          </div>
          <h1>TodoInput</h1>
          <div className='gap-8 border-2 border-lightgrey-700 px-8 py-4 w-full'>
           <Form input={input}
           todos={todos}
           setInput={setInput}
           setTodos={setTodos}
           edit={edit} 
           setEditTodo={setEditTodo}></Form>
          </div>
          <h1 className='my-4'>TodoList</h1>
          <div className='flex w-full gap-4 '>
            <button onClick={()=> setCheckFilter('all')}  className='bg-[#24A3B6] flex-1 p-1 flex items-center text-white justify-center rounded'>All</button>
            <button onClick={()=> setCheckFilter('done')} className='bg-[#24A3B6] flex-1 p-1 flex items-center text-white justify-center rounded'>Done</button>
            <button onClick= {()=> setCheckFilter('todo')} className='bg-[#24A3B6] flex-1 p-1 flex items-center text-white justify-center rounded'>Todo</button>
          </div>
          <TodoList  todos={filterTodos} setTodos={setTodos} edit={edit} setEditTodo={setEditTodo}></TodoList>
          <div className="flex w-full gap-6 mt-8  ">
            <button onClick={deleteDoneTask} className='bg-[#d93649]  p-2 flex flex-1 items-center text-white justify-center rounded'>Delete done tasks</button>
            <button onClick={deleteAll} className='bg-[#d93649]  p-2 flex-1 flex items-center text-white justify-center rounded'>Delete all tasks</button>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

