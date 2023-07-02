import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from "react-router-dom"

function Forgetpass({email,setEmail, code,setCode,password,setpassword}) {
  const history = useHistory()
  const [error ,setError] = useState();

 useEffect(()=>{
   async function mailing (){
     const user = {
      email
     }
    const res = await fetch(`https://madhan235-node-forget-pass.onrender.com/users/forget-password`,
    {
    method:"POST",
    body:JSON.stringify(user),
    headers:{"Content-Type":"application/json"},
  })
  const result = await res.json()
  localStorage.setItem("code",result.data.code)
console.log(result.data)
   }
   mailing()
 },[])

 function handleVerify(){
  const userCode = localStorage.getItem("code")
if(code === userCode){
  history.push("/resetpass")
  return
}
setError("code not match")

 }

  return (
     <Base
     title={"Reset Password"}
     description={"Enter the code, sent to your registered Email, to reset your password"}
     >
      <div className='signup'>
      <input
      type='text'
      placeholder='Enter your Email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input
       type='number'
       placeholder='Enter your Code'
       value={code}
       onChange={(e)=>setCode(e.target.value)}
      />
      <div style={{color:"red"}}>{error? <p>{error}</p>:""}</div>

      <button className='signupButton'
      onClick={handleVerify}
      >Verify</button>
     </div>
     </Base>
  )
}

export default Forgetpass