import React from 'react'

export const AddTodo = () => {
  return (
    <>
    <div className='bg-[lightgray] flex justify-center items-center w-[45%] ml-[420px] mt-4 h-[600px] rounded-[19px]'>
        <div className='bg-[white] flex flex-col items-center p-6 w-[97%] h-[580px] mt-1'>
            <h1>TodoInput</h1>
            <div className='gap-8 border-2 border-lightgrey-700 px-8 py-4 w-full'>
                <div className='flex py-4'>
                <i class="fa-solid fa-book bg-[#24A3B6] text-white px-3 rounded-l-md  py-2"></i>
                <input type="text" name="" id="" className='border-2 border-light-grey-700 w-full'/>
                </div>
                <div>
                    <button className='bg-[#24A3B6] w-full p-1 flex items-center text-white justify-center rounded'>Submit</button>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
