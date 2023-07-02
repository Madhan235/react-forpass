import React  from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Base({title,description,children}) {
    const history = useHistory();
  return (
    <div className='main-component'>
        <div className='navbar'>
 <button 
 className='Button' 
 onClick={()=>history.push("/signup")}
 >Signup</button>
 <button className='Button'
 onClick={()=>history.push("/login")}
 
 >Login</button>
  
        </div>
        <header>
            <h1 style={{color:"rgb(27, 140, 240)"}}>{title}</h1>
            <h5 style={{color:"rgb(27, 140, 240)"}}>{description}</h5>
        </header>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Base