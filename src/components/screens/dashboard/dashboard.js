import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/Siderbar';
import Pagination from '../pagination/Pagination';
import {GrView} from "react-icons/gr"
import {AiOutlineEdit,AiOutlineDelete} from "react-icons/ai"
import { Link } from 'react-router-dom'; // Import Link from React Router



import { FaPlus } from "react-icons/fa"; // Import the "+" icon

const Dashboard = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const data = [
    { id: 1, Company: 'Skill2skills' , location: 'Mohali' ,PAN :123456 },
    { id: 2, Company: 'Skill2skills' , location: 'Mohali', PAN :123456 },
    { id: 3, Company: 'Skill2skills' , location: 'Mohali',  PAN :123456 },
    { id: 4, Company: 'Skill2skills' ,location: 'Mohali',  PAN :123456 },
    { id: 5, Company: 'Skill2skills',  location: 'Mohali',  PAN :123456 },
    { id: 6, Company: 'Skill2skills' , location: 'Mohali',  PAN :123456 },

  ];

  const startIndex = (currentPage - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <DashboardStyle>
      <div className="Dashboard w-100 min-vh-100 bg-light d-flex">
        <Sidebar />
        <div className=" DashboardContainer w-100 ">
          <div className=" Data d-md-flex flex-wrap justify-content-between mt-3 ms-4 me-4">
            <div className=" Admin ml-3" style={{ margin: '0 10px' }}>
              <b> Admin</b>
            </div>
            <div className="search" style={{ margin: '0 10px' }}>
              <Link to="/companyform"> {/* Add a Link to the form page */}
                <span className="plus-icon"><FaPlus style={{ color: 'blue' }} /></span>
              </Link>
            </div>
          </div>
          <div className=' tableContent mt-4 ms-4 me-4'>
            <div className="col-12   col-5   ">
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>S No.</th>
                      <th>Company</th>
                      <th>Location</th>
                      <th>PAN No.</th>
                      <th>View</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.Company}</td>
                        <td>{item.location}</td>
                        <td>{item.PAN}</td>
                        <td>
                          <span><GrView/></span>
                        </td>
                        <td>
                          <span><AiOutlineEdit/></span>
                        </td>
                        <td>
                          <span><AiOutlineDelete/></span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pagination d-flex justify-content-end">
            <Pagination
              totalPages={Math.ceil(data.length / dataPerPage)}
              currentPage={currentPage}
              pageChange={handlePageChange}
            />
            </div>
          </div>

        </div>
      </div>
    </DashboardStyle>


  );
};

export default Dashboard;

const DashboardStyle = styled.div`

.tableContent{
  width:95%;
  cursor:pointer;
}

table tr{
  opacity:0.7;
}
table tr:hover{
 opacity:1;
}
@media screen and (max-width:600px){
 .Dashboard{
  position:fixed;
}

.tableContent{
  margin-left:0%;
  width:70%;
}
}`
