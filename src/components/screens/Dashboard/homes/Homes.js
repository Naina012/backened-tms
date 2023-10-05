import React from 'react'
// import "./home.scss"
import Sidebar from '../../Component/sidebar/Sidebar'
import Navbar from '../../Component/navbar/Navbar'
import styled from 'styled-components'
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons'


const Homes = () => {
  return (
    <HomeStyle>
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
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