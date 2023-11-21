import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Update(){
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:9002")
        .then(result=>setUsers(result.data))
        .catch(err=> console.log(err))
    },[])
    const handleDelete=(id)=>{
        axios.delete('http://localhost:9002/deleteblog/'+id,)
        .then(res=>{console.log(res)
        window.location.reload()
        })
        .catch(errr=>console.log(errr))
    }

    return (
       <div className="">
       <div className="">
        <Link to="/Create" className="btn btn-success">Add +</Link>
        <table className="table">
            <thead>
            <tr>
           <th>
            title
           </th>
           <th>
            content
           </th>
           </tr>
           </thead>
           <tbody>
            {
                users.map((user)=>{
                    return <tr>
                    <td>{user.title}</td>
                    <td>{user.content}</td>
                    <td>
                    <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
                    
                    
                    <button className='btn btn-danger'onClick={(e)=>handleDelete(user._id)}>Delete</button></td>
                    </tr>
                })
            }
           </tbody>
        </table>
       </div>
       
       </div>
    )
}
export default Update;