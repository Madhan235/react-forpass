import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from "react-router-dom"

function Resetpass({email,setEmail,password,setPassword,confirmPassword,setConfirmPassword}) {
  const history = useHistory();
  const [error ,setError] = useState();
  async function handleCode(){
    const user = {
      email,
      password,
      confirmPassword
     }
    const res = await fetch(`https://madhan235-node-forget-pass.onrender.com/users/reset-password`,
    {
    method:"POST",
    body:JSON.stringify(user),
    headers:{"Content-Type":"application/json"}
    })
const result = await res.json();
console.log(result);
if(result.data.error){
setError(result.data.error);
return
}
localStorage.setItem("token",result.data.token)
history.push("/movies")
     }
  
  return (
     <Base
     title={"Reset your password"}
     description={"enter your email and reset your new password"}
     >
      <div className='signup'>
      <input
      type='text'
      placeholder='Enter your Email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input
      type='text'
      placeholder='Enter your new password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <input
       type='text'
       placeholder='confirm your new password'
       value={confirmPassword}
       onChange={(e)=>setConfirmPassword(e.target.value)}
      />
      <div style={{color:"red"}}>{error? <p>{error}</p>:""}</div>

      <button className='signupButton'
      onClick={handleCode}
      >Confirm</button>
    
     </div>
     </Base>
  )
}

export default Resetpass