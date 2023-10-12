import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/Siderbar';
import Pagination from '../pagination/Pagination';

const Dashboard = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const data = [
    { id: 1, name: 'Sujeet Ojha', email: 'ojhasujeet2002@gmail.com', city: 'Mohali', phone: 8969665580 },
    { id: 1, name: 'Sujeet Ojha', email: 'ojhasujeet2002@gmail.com', city: 'Mohali', phone: 8969665580 },
    { id: 1, name: 'Sujeet Ojha', email: 'ojhasujeet2002@gmail.com', city: 'Mohali', phone: 8969665580 },
    { id: 1, name: 'Sujeet Ojha', email: 'ojhasujeet2002@gmail.com', city: 'Mohali', phone: 8969665580 },
    { id: 1, name: 'Sujeet Ojha', email: 'ojhasujeet2002@gmail.com', city: 'Mohali', phone: 8969665580 },
    { id: 1, name: 'Sujeet Ojha', email: 'ojhasujeet2002@gmail.com', city: 'Mohali', phone: 8969665580 },

  ];

  const startIndex = (currentPage - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <DashboardStyle>

      <div className="Dashboard w-100 min-vh-100 bg-light d-flex" >
        <Sidebar />
        <div className=" DashboardContainer w-100   ">

          <div className=" Data d-md-flex flex-wrap justify-content-between mt-3 ms-4 me-4">

            <div className=" Admin ml-3" style={{ margin: '0 10px' }}>
            <b> Admin</b>
            </div>
            <div className="search" style={{ margin: '0 10px' }}>
            <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className=' tableContent mt-4 ms-4 me-4'>
            <div className="col-12   col-5   ">
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>S No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Phone No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.city}</td>
                        <td>{item.phone}</td>
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
