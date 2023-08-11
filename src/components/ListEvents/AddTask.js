import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [value, setValue] = useState("");

    const addItem = () => {
        addTask(value);
        setValue('')
    }
  return (
      <>
          <div className='input-container'>
              <input className='input' type="text" placeholder='Add a new task' value={value}
              onChange={(e)=>{setValue(e.target.value)}}
              />
              
              <button onClick={addItem} className='add-btn'>ADD</button>
         </div>
    </>
  )
}

export default AddTask