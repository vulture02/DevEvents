'use client'

import { useState } from "react"

const BookEvent = () => {
    const [email,setemail]=useState('');
    const [submitted,setSubmitted]=useState(false)
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        setTimeout(()=>{
            setSubmitted(true)
        },1000)
    }
  return (
    
    <div id="book-event">

      {submitted?(
        <p className="text-sm">Thank you for signing up!</p>
      ):(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email Adress</label>
                <input type="email"
                value={email} 
                onChange={(e)=>setemail(e.target.value)}
                id="email"
                placeholder="Enetr you email address"/>
            </div>
            <button type="submit" className="button-submit">Submit</button>
        </form>
      )}
    </div>
  )
}

export default BookEvent
