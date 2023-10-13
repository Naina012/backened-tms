import React from 'react'
import styled from "styled-components"


const projects = () => {

  const projectData = [
    {
      name: "Task Management",
      assignDate: "01-01-2023",
      assignedTo: "Arjun"
    },
    {
      name: "Task Management",
      assignDate: "01-01-2023",
      assignedTo: "Arjun"
    },
    {
      name: "Task Management",
      assignDate: "01-01-2023",
      assignedTo: "Arjun"
    },
    {
      name: "Task Management",
      assignDate: "01-01-2023",
      assignedTo: "Arjun"
    },
    {
      name: "Task Management",
      assignDate: "01-01-2023",
      assignedTo: "Arjun"
    },

    {
      name: "Task Management",
      assignDate: "01-01-2023",
      assignedTo: "Arjun"
    },

  ];
  return (
    <CardStyle>
      <div>
        {/* <div className="search ms-4" style={{ margin: '10px 10px' }}> */}
        <div className="top d-flex justify-content-between">
        <div className="search ms-5 mt-4" >
          <input type="text" placeholder="Search..." />
        
        </div>
        <div className='add '>
        <button type="button" class="btn ">New Project +</button>
       {/* <IoPlaySkipBackCircle/> */}

        </div>
        </div>
        <div className=" row">
          {projectData.map((project, index) => (
            <div class="cardhover card ms-5 mt-4  " style={{ width: " 22rem", height: "12rem" }}>
              <div class="card-body">
                <h5 class="card-title text-center">{project.name}</h5>
                <h6 class="card-subtitle mt-4 mb-2 text-body-secondary">Assigned Date - {project.assignDate}</h6>
                <p class="card-text">Assigned To : {project.assignedTo}</p>
                <a href="*" class="card-link">more info.</a>

              </div>
            </div>
          ))}
        </div>

        
      </div>
    </CardStyle>

  )
}

export default projects

const CardStyle = styled.div`
.card{
  background-color:#9CDFBE;
}
.add{
  display:flex;
  justify-content:flex-end;
  margin-right:10%;
  margin-top:2%;
  .btn{
    background-color:#818589; 
    color:black;
  }
}

.cardhover{
  
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  
  .cardhover:hover {
    transform: scale(1.1);
  }

`

//#9CDFBE
