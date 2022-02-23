import axios from 'axios';
import React, { useEffect, useState } from 'react';

function About(props) {
    const [post ,setPost]=useState({})
    const[id,setId]=useState(1);
const [idfromButton,setIdfromButton]=useState(1)

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/photos/${idfromButton}`)
    .then(res=>{
        console.log(res)
        setPost(res.data)
    })
    .catch(err=>{
        console.log(err);
    })
},[idfromButton])


const handleClick=()=>[
setIdfromButton(id)
]

    return (
        <div>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
        <button type='button' onClick={handleClick}>Fetch post</button>
                <div className="card" style={{width: '18rem'}}>
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">
                      Content
                    </p>
                    <a href="/#" className="card-link">Card link</ a>
                  </div>
                  <div className="card-header">
                      <img src={post.thumbnailUrl} alt=""  size="200px"/>
                  </div>
                </div>
                
        </div>
    );
}

export default About;