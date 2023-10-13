// import React from 'react';
// import { FaUsers } from 'react-icons/fa'; 
// import {MdCreateNewFolder} from  "react-icons/md";
// import { Link } from "react-router-dom";
// import {LuFileStack} from "react-icons/lu";
// import {RiLogoutCircleLine} from "react-icons/ri"


// import styled from "styled-components"
// const Sidebar = () => {
//   return (
//     <SidebarStyle>
//     <div className="sidebar min-vh-100 w-100">
//       <ul>
//         <li>
//           <FaUsers />
//           <br/>
//           <span className="icon-text ">Users</span>
//           </li>
//         <li>
//         <Link to="/create" class="text-white text-decoration-none">
//           <MdCreateNewFolder />
//           <br/>
//           <span className="icon-text ">Create New</span>
//           </Link>
//         </li>

//         <li>
//         <Link to="/projects" class="text-white text-decoration-none">
//           <LuFileStack />
//           <br/>
//           <span className="icon-text">Projects</span>
//         </Link>
//         </li>
//         <li>
//           <RiLogoutCircleLine />
//           <br/>
//           <span className="icon-text">Logout</span>
//         </li>
//       </ul>
//     </div>
//     </SidebarStyle>
//   );
// };

// export default Sidebar;

// const SidebarStyle=styled.div`
// .sidebar {
//   background-color:#818589;
//   color:#fff ;

//  height: 100v
//   ${'' /* position: fixed; */}
//   /* top : 15%;
//   left: 0; */
//   ${'' /* overflow-y: auto; */}
// }

// .sidebar ul {
//   list-style-type: none;
//   padding: 0;
// }

// .sidebar li {
//   padding: 15px;
//   text-align: center;
// }

// .icon-text {
//   display: none; 
// }

// @media (min-width: 600px) {

//   .icon-text {
//     display: inline; 
//     ${'' /* color:#fff; */}
//   }
// }
// `;




import React from 'react';
import { AiFillHome} from 'react-icons/ai';
import {CgProfile} from "react-icons/cg"
import styled,{css} from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarStyle>
      <div className="sidebar min-vh-100 w-100">
        <ul>
          <li>
            <AiFillHome className='hover-effect'/>
            <br />
            <span className="icon-text text-black" style={{cursor:"pointer"}}>Home</span>
          </li>
          <li>
            <div class="dropdown">
              <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <CgProfile/>
              <br/>
                Create Profile
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Company</a></li>
                <li><a class="dropdown-item" href="#">Department</a></li>
                <li><a class="dropdown-item" href="#">Designation</a></li>
                <li><a class="dropdown-item" href="#">Employee</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </SidebarStyle>
  );
};

export default Sidebar;

const SidebarStyle = styled.div`
.sidebar {
  background-color:#818589;
  color:#fff ;
  
 height: 100v
  ${'' /* position: fixed; */}
  /* top : 15%;
  left: 0; */
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
.dropdown button > svg {
  color: white;
}

@media (min-width: 600px) {
  
  .icon-text {
    display: inline; 
    ${'' /* color:#fff; */}
  }
}`;