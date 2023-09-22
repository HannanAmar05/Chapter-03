import React, { useState } from 'react'
import {Tampilan} from './Tampilan.js'

export const RenderList = () => {
    let data = [
        {
          nama: "paijo",
          umur: 12
        },
        {
          nama: "hannan",
          umur: 12
        },
        {
          nama: "salto",
          umur: 23
        },
        {
          nama: "tukimin",
          umur: 29
        },
        {
          nama: "bagas",
          umur: 20
        }
      ]
    const renderList = () => {
        return data.map((value)=>{
            return <Tampilan data={value} ></Tampilan>
        })
    }
  return (
    <div className='bg-[red] flex flex-col items-center space-y-2'>{renderList()}
    <input type="checkbox" />
    </div>
  )
}
