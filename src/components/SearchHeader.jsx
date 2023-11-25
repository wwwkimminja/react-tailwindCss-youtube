import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'

function SearchHeader() {
  const [text,setText]=useState('')
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setText(e.target.value)
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    setText('')
    navigate(`/videos/${text}`)
  }

  return (
    <div>
      <Link to="/">Youtube</Link>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='search video' value={text} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default SearchHeader