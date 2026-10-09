import { useState } from "react"

const FormHandling = () => {

  const [titel, setTitel] = useState('')


      const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form submitted by",titel);

    setTitel('')
  }
  return (
    <div>
        <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input value={titel}
        onChange={(e)=>{
            setTitel(e.target.value);
        }} type="text" placeholder="Enter Name"/>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default FormHandling