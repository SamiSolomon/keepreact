import React from 'react'

export const CreateArea = (props) => {

    function handleDelete(){
        props.onDelete(props.id)
    }
  
  return (
    <div   className='m-20'>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col shadow-2xl'>
              <h1 className=' text-center '>{props.title} </h1>
              <p className='text-center '>{props.content}</p>
              <button onClick={handleDelete}>delete</button>
            </div>
        </div>
    </div>
  )
}



export default CreateArea;
