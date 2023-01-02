import React,{useState} from 'react'

function Input({addHandler}) {

  const [text,setText]=useState('')

  const textHandler=(e)=>{
    e.preventDefault()
    setText('')

  }
  
  return (
    <form onSubmit={textHandler}
    className='mx-auto h-8 bg-white w-[300px] flex items-center py-6 justify-between rounded my-6'>
        <input className='border-none outline-none ml-4 text-left' value={text} onChange={(e)=>{setText(e.target.value)}} type='text' placeholder='Enter Feedback'/>
        <button  onClick={()=>addHandler(text)}
        className='bg-white text-black w-4 text-1xl mr-4 text-3xl rounded-full font-bold hover:text-blue-300' type='submit'>+</button>

    </form>
  )
}

export default Input