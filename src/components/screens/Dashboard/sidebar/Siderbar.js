import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import CreateIcon from '@mui/icons-material/Create';
import GroupsIcon from '@mui/icons-material/Groups';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CategoryIcon from '@mui/icons-material/Category';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ShieldIcon from '@mui/icons-material/Shield';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsIcon from '@mui/icons-material/Settings';
import styled from "styled-components";
import "./sidebar.scss"




const Sidebar = () => {

    return (
        // <SidebarStyle>
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Super Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>

                    <p className="title"> ADMIN</p>
                    <li>
                        <AdminPanelSettingsIcon className="icon"/>
                        <span>Admin</span>
                    </li>
                    <li>
                        <CreateIcon className="icon"/>
                        <span>Create New</span>
                    </li>
                    <li>
                        <GroupsIcon className="icon"/>
                       <span>Admin Group</span>
                        
                    </li>

                    <p className="title">CATEGORIES</p>
                    <li>
                        <CategoryIcon className="icon"/>
                        <span>Categories</span>
                    </li>
                    <li>
                        <CreateIcon className="icon"/>
                        <span>Create New</span>
                    </li>
                    
                    <p className="title">TEAM MEMBERS</p>
                    <li>
                        <ShieldIcon className="icon"/>
                        <span>Designations</span>
                    </li>
                    <li>
                        <CreateIcon className="icon"/>
                        <span>Create New</span>
                    </li>
                    <li>
                        < Diversity3Icon className="icon"/>
                       <span>Members</span>                   
                    </li>

                    <p className="title">PROJECTS</p>
                    <li>
                        <AccountTreeIcon className="icon"/>
                        <span>Projects</span>
                    </li>
                    <li>
                        <CreateIcon className="icon"/>
                        <span>Create New</span>
                    </li>
                    <p className="title">USEFUL LINKS</p>
                    <li>
                        <SettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <li> 
                        <LogoutSharpIcon className="icon"/>
                        <span>Logout</span>
                    </li> 
                </ul> 
            </div>
            
            {/* <div className="bottom">
               <div className="colorOption"></div>
               <div className="colorOption"></div>
            </div> */}

        </div>
      

    )
}

export default Sidebar;

// const SidebarStyle=styled.div`

  
  
  
// `;