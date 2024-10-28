import React, { useState } from 'react'

function PostApi() {
    const [userId,setUserId] = useState('');
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');

    const saveUsers = (e) =>{
        e.preventDefault()
        console.log({userId,title,body })
        let data ={ userId,title,body}
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            // console.log('result',result)
            result.json().then((res)=>{
               console.log('res',res)
            })
        })

    }

  return (
    <>
    <h1>Post Api</h1>
    <input type="text" value={userId} name='userId' onChange={(e)=>{setUserId(e.target.value)}} /> <br /><br />
    <input type="text" value={title} name='title' onChange={(e)=>{setTitle(e.target.value)}} /> <br /><br />
    <input type="text" value={body} name='body' onChange={(e)=>{setBody(e.target.value)}}/> <br /><br />
  
    <button type='button' onClick={saveUsers} >Save new User</button>
    </>
  )
}

export default PostApi
