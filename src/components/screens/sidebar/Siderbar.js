import React from 'react'
import styled from "styled-components";
import { BiCategoryAlt, BiSolidGroup } from 'react-icons/bi';
import { FaProjectDiagram } from 'react-icons/fa'
import { MdDashboardCustomize, MdCardMembership, MdAdminPanelSettings } from "react-icons/md"
import { GoVerified } from "react-icons/go"
import { IoIosCreate } from "react-icons/io"
import { AiFillSetting } from "react-icons/ai"


const Sidebar = () => {

    return (

        <SidebarStyle>
            <div className='sidebar'>
                <div className="top">
                    <span className="logo">Super Admin</span>
                </div>
                <hr />
                <div className="center">
                    <ul>
                        <p className="title">MAIN</p>
                        <li>
                            <MdDashboardCustomize className='icon' />
                            <span>Dashboard</span>
                        </li>
                        <p className="title"> ADMIN</p>
                        <li>
                            <MdAdminPanelSettings className='icon' />
                            <span>Admin</span>
                        </li>
                        <li>
                            <IoIosCreate className='icon' />
                            <span>Create New</span>
                        </li>
                        <li>
                            <BiSolidGroup className='icon' />
                            <span>Admin Group</span>
                        </li>

                        <p className="title">CATEGORIES</p>
                        <li>
                            <BiCategoryAlt className='icon' />
                            <span>Categories</span>
                        </li>
                        <li>
                            <IoIosCreate className='icon' />
                            <span>Create New</span>
                        </li>

                        <p className="title">TEAM MEMBERS</p>
                        <li>
                            <GoVerified className='icon' />
                            <span>Designations</span>
                        </li>
                        <li>
                            <IoIosCreate className='icon' />
                            <span>Create New</span>
                        </li>
                        <li>
                            <MdCardMembership className='icon' />
                            <span>Members</span>
                        </li>

                        <p className="title">PROJECTS</p>
                        <li>
                            {/* <i class="fa-thin fa-diagram-project"></i> */}
                            <FaProjectDiagram className='icon' />
                            <span>Projects</span>
                        </li>
                        <li>
                            <IoIosCreate className='icon' />
                            <span>Create New</span>
                        </li>
                        <p className="title">USEFUL LINKS</p>
                        <li>
                            <AiFillSetting className="icon" />
                            <span>Settings</span>
                        </li>
                    </ul>
                </div>
            </div>
        </SidebarStyle>
    )
}

export default Sidebar;

const SidebarStyle = styled.div`

.sidebar {
    flex: 1;
    border-right: 0.5px solid rgb(230, 225, 225);
    min-height: 100vh;
    background-color: white;
    min-width:40vh
  
    .top {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
  
        .logo {
            align-item:center;
            font-size: 20px;
            font-weight: bold;
            color: #6699CC;
        }
    }
  
    hr {
        height: 0;
        border: 0.5px solid rgb(230, 225, 225);
    }
  
    .center {
        padding-left: 10px;
         width:150px;
  
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
  
            .title {
                font-size: 10px;
                font-weight: bold;
                color: #999;
                margin-top: 15px;
                margin-bottom: 5px;
            }
  
            li {
                display: flex;
                align-items: center;
                padding: 4px;
                cursor: pointer;
  
                &:hover {
                    background-color: #ece8ff;
                }
  
                .icon {
                    font-size: 18px;
                    color: #6699CC;
                }
  
                span {
                    font-size: 13px;
                    font-weight: 600;
                    color: black;
                    margin-left: 10px;
                }
            }
        }
    }
  
    .bottom {
        display: flex;
        align-items: center;
        margin: 10px;
  
        .colorOption {
            width: 20px;
            height: 20px;
            border-radius: 5px;
            border: 1px solid #7451f8;
            cursor: pointer;
            margin: 5px;
  
            &:nth-child(1) {
                background-color: whitesmoke;
            }
  
            &:nth-child(2) {
                background-color: #333;
            }
  
        }
    }
  } 
  
 `;