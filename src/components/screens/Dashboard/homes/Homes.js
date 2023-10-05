import React from 'react'
// import "./home.scss"
import Sidebar from "../sidebar/Siderbar"
import Navbar from '../navbar/Navbar'
import styled from 'styled-components'


const Homes = () => {
  return (
    <HomeStyle>
    <div className="home">
      {/* <Sidebar/> */}
      <Sidebar/>
      <div className="homeContainer">
        {/* <Navbar/> */}
        <Navbar/>
      </div>
    </div>
    </HomeStyle>
  )
}

export default Homes


const HomeStyle=styled.div`
.home{
  display: flex;

  .homeContainer{
      background-color: lightblue;
      flex: 6;
      
     
    

    
  }
}
`;