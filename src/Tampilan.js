import React from 'react'

export const Tampilan = (props) => {
  return (
    <div className='bg-[red]'>
        {props.data.nama}
        {props.data.umur}
    </div>
  )
}
