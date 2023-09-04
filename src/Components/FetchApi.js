import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const FetchApi = () => {
    const [post,setPost] = useState([])


    useEffect(()=>{
axios.get ("https://fakestoreapi.com/products")
.then((response)=>{
  
setPost(response.data)

})
    },[])
    
  return (
    <div>
     {post.map((value)=>{
        return(
            <div>
                <div>{value.id}</div>
                <div>{value.title}</div>
                <div>{value.price}</div>
                <div>{value.description}</div>

            </div>
        )
     })}
    </div>
  )
}

export default FetchApi
