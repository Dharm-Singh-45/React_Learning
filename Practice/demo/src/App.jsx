import { BrowserRouter, Link, Navigate, Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import User from "./components/User";
import Filter from "./components/Filter";
// import Page404 from "./components/Page404";

 

function App() {
  return (
    <>
  
  
      <BrowserRouter>
       <NavBar/> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path ='/*' element={<Page404/>} /> */}
          <Route path="/user/:name" element={<User/>}/>
          <Route path="/*" element={<Navigate to='/' />} />
          <Route path="/filter" element={<Filter/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
