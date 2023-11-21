import React, { useState } from "react";
function Blog(){
    const [users,setUsers]=useState([{
        Title:"blog title ",
        Content:"write your content here "
    }])

    return (
       <div className="">
       <div className="">
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
                    <tr>
                    <td>{user.Title}</td>
                    <td>{user.Content}</td>
                    <td><button>Edit</button>
                    <button>Delete</button></td>
                    </tr>
                })
            }
           </tbody>
        </table>
       </div>
       
       </div>
    )
}
export default Blog;