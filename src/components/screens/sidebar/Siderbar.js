
import styled from "styled-components";





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
                       
                        <span>Dashboard</span>
                    </li>

                    <p className="title"> ADMIN</p>
                    <li>
                       
                        <span>Admin</span>
                    </li>
                    <li>
                       
                        <span>Create New</span>
                    </li>
                    <li>
                        
                       <span>Admin Group</span>
                        
                    </li>

                    <p className="title">CATEGORIES</p>
                    <li>
                        
                        <span>Categories</span>
                    </li>
                    <li>
                        
                        <span>Create New</span>
                    </li>
                    
                    <p className="title">TEAM MEMBERS</p>
                    <li>
                        
                        <span>Designations</span>
                    </li>
                    <li>
                       
                        <span>Create New</span>
                    </li>
                    <li>
                       
                       <span>Members</span>                   
                    </li>

                    <p className="title">PROJECTS</p>
                    <li>
                       
                        <span>Projects</span>
                    </li>
                    <li>
                       
                        <span>Create New</span>
                    </li>
                    <p className="title">USEFUL LINKS</p>
                    <li>
                        
                        <span>Settings</span>
                    </li>
                    <li> 
                        
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