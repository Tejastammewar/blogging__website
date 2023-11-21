import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Create(){
    const [title,setTitle]=useState()
    const [content,setContent]=useState()
    const navigate=useNavigate()
    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:9002/createBlog",{title,content})
        .then(result=>{
            console.log(result)
            navigate('/blog')
        })
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <div>
                <form onSubmit={Submit}>
                    <h2>Add Blog </h2>
                    <div>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter title of Blog " className="form-control" onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Content of blog </label>
                        <textarea name="" id="" cols="120" rows="10" placeholder="Enter the content of blog " onChange={(e)=>setContent(e.target.value)}></textarea>

                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    
        )
}

export default Create;