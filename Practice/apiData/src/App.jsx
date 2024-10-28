import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'; // Ensure axios is imported from 'axios'

function App() {
  const [myData,setMyData] = useState([])
  const [isError,setIsError] = useState('')
  // useEffect(() => {
  
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then((res) => {
  //     console.log('response from axios', res.data)
  //     setMyData(res.data)
  //   }).catch((error) => console.error('Error fetching data:', error)); // Optional error handling
  // }, []);
// using async await 

const getApiData = async()=>{
try {
  
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  setMyData(res.data)
} catch (error) {
  setIsError(error.message)
}

}

useEffect(()=>{
  getApiData()
},[])

  return (
    <>
      {/* Components for GetApi, PostApi, DeleteApi */}
      {/* <GetApi/>
      <PostApi/>
      <DeleteApi/> */}
      {
        myData.slice(0,12).map((item)=>{
        
          return (<div>
            <h2>{item.title}</h2>
            <h2>{item.id}</h2>
            <p>{item.body}</p>
          </div>)
        })
      }

    </>
  );
}

export default App;
