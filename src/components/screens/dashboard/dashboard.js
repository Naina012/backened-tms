import React from 'react'
// import "./home.scss"


import styled from 'styled-components'
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../sidebar/Siderbar'


const Dashboard = () => {
  return (
    <HomeStyle>
    <div className="home">
      <Sidebar/>
      
    </div>
    </HomeStyle>
  )
}

export default Dashboard


const HomeStyle=styled.div`
.home{
  display: flex;

  .homeContainer{
      background-color: lightblue;
      flex: 6;
      
     
    

    
  }
}
`;