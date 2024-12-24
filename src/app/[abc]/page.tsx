import React from 'react'
import Image from 'next/image'

const page = async (props:any) => {
  console.log(props)
  let todos=await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.abc}`)
  let todos2=await todos.json();
  return (
    <div className='w-[30vw] rounded-lg mx-auto border-2 p-7 my-9'><h1 className='text-green-700 text-center font-bold'>{todos2.title}</h1><hr className='my-4'/>
    <p className='text-gray-500 text-center'>{todos2.body}</p>
    </div>
  )
}

export default page