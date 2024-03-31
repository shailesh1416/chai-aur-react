import React,{useState,useContext} from 'react'
import UserContex from '../context/UserContext'

function Login() {
    const [username,setUsername]= useState("")
    const [password,setPassword]= useState("")

    const {setUser} = useContext(UserContex)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
    

  return (
    <div className='bg-gray-300 p-4 flex flex-col'>
      <h2>Login</h2>
      <input className='p-2 rounded-xl mb-2' type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/> {"   "}
      <input className='p-2 rounded-xl mb-2' type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button className='bg-green-500' onClick={handleSubmit}> Submit</button>
    </div>
  )
}

export default Login
