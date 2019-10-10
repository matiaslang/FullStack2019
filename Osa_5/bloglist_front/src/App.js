import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const handleLogin = event => {
    event.preventDefault()
    console.log('Logging in with', username, password)
  }

  return (
    <div>
      <h1>Blogs</h1>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type='text'
            value={username}
            name='Username'
            onChange={({ target }) => setusername(target.value)}
          ></input>
        </div>
        <div>
          password
          <input
            type='password'
            value={password}
            name='Password'
            onChange={({ target }) => setpassword(target.value)}
          ></input>
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default App
