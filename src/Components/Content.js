import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'

function Content() {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
     
    const getMovies = async ()=>{
      const res = await fetch(`https://madhan235-node-forget-pass.onrender.com/movies/all`,
      {
      method:"GET",
        headers:{"auth-token": localStorage.getItem("token")}
    });  
    const result = await res.json();
    // console.log(result.data);
    setMovies(result.data) 
    }
getMovies();
  },[])
  return (
    <Base
    title={"Stream.net"}
    description={"Enjoy your latest hit movies from across the world for 10rs/day"}>
    <div className=' card-container'>
{movies.map((movi,idx)=>(
  
<div className='card' key={idx}>
<img src={movi.img} alt='movie-poster'/>
<h3>{movi.name}</h3>
<p>{movi.genre}</p>
<div className='m-buttons'>
<button className='signupButton'>join-Stream-now</button>
<button className='signupButton'>Watch-Now</button>
</div>
      </div>
))}
    </div>
    
    </Base>
  )
}

export default Content