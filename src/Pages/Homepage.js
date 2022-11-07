import React from 'react';
import Details from '../Components/Details';

function Homepage() {
  return (
       <div className='content'>
        <div className='homepage flex'>
          {/* <img src={logo} alt="logo"/> */}
          <h1>WELCOME TO</h1>
          <h1>MY PAGE</h1>
        </div>
        <Details/>
       </div>
  )
}

export default Homepage;