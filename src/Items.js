import React,{useState,useEffect} from 'react'
import {AiOutlineDelete} from 'react-icons/ai'

function Items({thing,Delete,toggleComplete}) {

  

  


  

  
 
  
  return (
    
    
    <>
   
    <div className='bg-green-400 w-[300px] h-12 rounded-md mx-auto my-8 flex items-center justify-between '>
      <input onChange={()=>toggleComplete(thing)} className='bg-green-500 ml-2 mt-2' type='checkbox'/>
    { thing.completed ?<h3 className='line-through '>{thing.text}</h3>:<h3 className='font-bold'>{thing.text}</h3>}
    <div  onClick={()=>Delete(thing.id)}><AiOutlineDelete size={20} className='mr-2 cursor-pointer hover:text-red-700'/></div>
    </div>
    </>

    
  )
 
}

export default Items