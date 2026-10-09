import { useState } from "react";
import 'remixicon/fonts/remixicon.css'
const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  const submitHandler  = (e)=>{
    e.preventDefault()
    
    const copyTask = [...task]

    copyTask.push({
      title:title,
      details:details
    })
    setTask(copyTask)


    setTitle('')
    setDetails('')
  }


  return (
    <div className='h-screen lg:flex text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2 gap-4 p-10 flex-col items-start'>
      <h1 className='text-4xl font-bold'>Add Notes</h1>
        
        {/* Pehla Input for Heading */}
          <input 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          type="text" 
          placeholder="Enter Notes Heading" 
          className='px-5 w-full py-2 border-2 rounded outline-none' 
        />

           {/* Dusra Input for Detail */}
        <textarea 
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          type="text" 
          className="px-2 w-full h-32 py-2 border-2 rounded outline-none" 
          placeholder="Write Details" />
        <button 
          className='active:scale-95 bg-white w-full text-black px-5 py-2 outline-none'>Add Note
        </button>
      </form>
      <div className=' lg:w-1/2 lg:border-l-2 p-6'>
        <h1 className='text-xl font-bold'>Recent Notes</h1>
        <div className='flex items-start justify-start flex-wrap gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(elem,idx){
          
            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 bg-cover px-5 py-7 text-black p-4 rounded-2xl bg-[url("https://cdn.pixabay.com/photo/2018/03/31/01/33/paper-3277155_1280.png")]'>
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-400 rounded font-bold text-white py-1 text-xs'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App