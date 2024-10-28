import React from 'react'
import { useState,useEffect } from "react";

function GetApi() {

    const [data, setData] = useState([]);
    

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
        result.json().then((res) => {
          console.log("res", res);
          setData(res);
        });
      });
    }, []);
  
    console.log("hello", data);

    const deleteUser = (id) =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((res)=>{
                console.log('res dlt',res)
            })
        })
    }

  return (
    <>
    <h1>Get API</h1>
      <table border='1'>
        <tbody>
          <tr>
            <td>UserID</td>
            <td>ID</td>
            <td>Title</td>
            <td>body </td>
          </tr>

          {data.map((item) => {
            return(

             (item.id > 99 ? 
            <tr key={item}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body }</td>
              <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
            </tr> : null)
            )
          })}
        </tbody>
      </table>
      <div>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>Update</button>
      </div>
    </>
  )
}

export default GetApi
