import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


function Login({email,setEmail,password,setPassword}) {
    const history = useHistory();
    const [error, setError] = useState();

     const handleLogin = async()=>{
      const user = {
        email,
        password
      } 
      
      const res = await fetch(`https://madhan235-node-forget-pass.onrender.com/users/login`,
      {
      method:"POST",
      body:JSON.stringify(user),
      headers:{"Content-Type":"application/json"},
    })
    const result = await res.json()
    localStorage.setItem("token",result.data.token)

     if(result.data.error){
     return setError(result.data.error)
     }
     
  history.push("/movies");
     }
    return (
     <Base title={"Already a user !"}
     description={"Please login to continue"}>
         
        <div className='signup'>
      <input
      type='text'
      placeholder='Enter your Email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <div style={{color:"red"}}>{error? <p>{error}</p>:""}</div>

      <input
       type='text'
       placeholder='Enter your password'
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
      />
      <button className='signupButton'
      onClick={()=>handleLogin()}
      >Login</button>
      
      <button className='signupButton'
      onClick={()=>history.push("/forgetpass")}
      >Forget-Password</button>
     </div>
     </Base>

      
  )
}

export default Login