import React from 'react';
import {FaDiagramProject} from "react-icons/fa6"
import { FaUsers,  FaSignOutAlt } from 'react-icons/fa'; 
import {MdCreateNewFolder} from  "react-icons/md"


import styled from "styled-components"
const Sidebar = () => {
  return (
    <SidebarStyle>
    <div className="sidebar min-vh-100 w-100">
      <ul>
        <li>
          <FaUsers />
          <br/>
          <span className="icon-text ">Users</span>
          </li>
        <li>
          <MdCreateNewFolder />
          <br/>
          <span className="icon-text ">Create New</span>
        </li>
        <li>
          <FaDiagramProject />
          <br/>
          <span className="icon-text">Projects</span>
        </li>
        <li>
          <FaSignOutAlt />
          <br/>
          <span className="icon-text">Logout</span>
        </li>
      </ul>
    </div>
    </SidebarStyle>
  );
};

export default Sidebar;

const SidebarStyle=styled.div`
.sidebar {
  background-color:#333;
  color:#fff ;
  
 height: 100v
  ${'' /* position: fixed; */}
  top: 15%;
  left: 0;
  ${'' /* overflow-y: auto; */}
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  padding: 15px;
  text-align: center;
}

.icon-text {
  display: none; 
}

@media (min-width: 600px) {
  
  .icon-text {
    display: inline; 
    ${'' /* color:#fff; */}
  }
}
`;




