import Homepage from './Pages/Homepage';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import {Routes, Route} from 'react-router-dom';
import Graph from './Pages/Graph';
// import {useState} from 'react';
// import axios from 'axios';

function App() {

  // const[user, setLoginUser] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path="/graph" element={
              (user && user._id) ? (<Graph/>) : (<Login setLoginUser={setLoginUser}/>)
            }/> */}
            <Route path='/graph' element={<Graph/>}/>
      </Routes>
    </div>
  )
}

export default App
