import React,{useState} from 'react'
import styled from 'styled-components'
import Sidebar from '../sidebar/Siderbar'
import { BiSearchAlt2 } from "react-icons/bi"
import Pagination from '../pagination/Pagination'


const Dashboard = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const handlePageChange=(newPage)=>{
    setcurrentPage(newPage);
  }
  return (
    <HomeStyle>
      <div className="home">
        <Sidebar />
        <div className='homeContainer' >
          <div className='header'>
            <h1>Admin</h1>
            <div className="search">
              <input type="text" placeholder="search..." />
              <BiSearchAlt2 className='searchIcon' />
            </div>
          </div>
        </div>
      </div>
        <div className="pagination">
          <Pagination totalPages={10} currentPage={currentPage} pageChange={handlePageChange}/>
        </div>
    </HomeStyle>
  )
}

export default Dashboard

const HomeStyle = styled.div`
  .home {
    display: flex;
  }

  .homeContainer {
    flex: 6;
    margin:40px 35px 0px 20px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

  }

  .search{
    display: flex;
    align-items: center;
    border: 0.5px solid lightgrey;
    padding: 3px;
    background-color: black;
}
  input[type="text"] {
    padding: 4px;
    outline:none;
  }

  .searchIcon {
    margin-left: 5px;
    color: #888;
    cursor: pointer;
  }

  .pagination {
    flex: 1; 
    display: flex;
    justify-content: flex-end; 
    margin-right:30px;
  }
`;