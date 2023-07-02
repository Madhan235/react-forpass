
import { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from "react-router-dom"

function Signup({email,setEmail,password,setPassword}) {
  const [error,setError] = useState()
  const history = useHistory()
  const handleSignup = async ()=>{
    const newUser = {
      email,
      password
    } 
    const res = await fetch(`https://madhan235-node-forget-pass.onrender.com/users/signup`,
    {
    method:"POST",
    body:JSON.stringify(newUser),
    headers:{"Content-Type": "application/json"},
  })
  const result = await res.json()
   if(result.data.error){
   return setError(result.data.error)

   }
history.push("/login");
  }
  return (
     <Base title={"New User, Please signup"}
     description={
"once you signed-up you can login in and access the site, your data's are secured with us"}>
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
      onClick={handleSignup}
      >Signup</button>
     </div>
     </Base>
  )
}

export default Signup;