import React from 'react'
import styled from "styled-components"


const Projects = () => {


  const projectData = [
    {
      name: "Task Management",
      assignDate: "01-01-2023",
      expectedDate:"10-10-2023",
      assignedTo: "Arjun"
    },
    {
      name: "Task Management",
      assignDate: "01-01-2023",
      expectedDate:"10-10-2023",
      assignedTo: "Arjun"
    },
    {
      name: "Task Management",
      assignDate: "01-01-2023",
      expectedDate:"10-10-2023",
      assignedTo: "Arjun"
    },
    {
      name: "Task Management",
      assignDate: "01-01-2023",
      expectedDate:"10-10-2023",
      assignedTo: "Arjun"
    },
    {
      name: "Task Management",
      assignDate: "01-01-2023",
      expectedDate:"10-10-2023",
      assignedTo: "Arjun"
    },

    {
      name: "Task Management",
      assignDate: "01-01-2023",
      expectedDate:"10-10-2023",
      assignedTo: "Arjun"
    },

  ];
  return (
    <CardStyle>
      <div>

        <div className="top d-flex justify-content-between">
          <div className="search ms-5 mt-4" >
            <input type="text" placeholder="Search..." />

          </div>
          <div className='add '>
            <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">New Project +</button>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Project Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row g-3 align-items-center">
                      <div class="row mt-3 ">
                        <div>
                          <label class="form-label"><b>Project Name</b></label>
                          <input type="text" class="form-control" placeholder="Enter project" />
                        </div>
                        <div class='d-flex justify-content-between mt-3'>
                          <div>
                            <label class="form-label"><b>Assign Date</b></label>
                            <input type="date" class="form-control" />
                          </div>
                          <div>
                            <label class="form-label"><b>Expected Date</b></label>
                            <input type="date" class="form-control" />
                          </div>
                        </div>
                        <div>
                          <label class="form-label mt-3"><b>Assign To</b></label>
                          <input type="text" class="form-control" placeholder="Person Name" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Add Project </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className=" row">
          {projectData.map((project, index) => (
            <div class="cardhover card ms-5 mt-4  " style={{ width: " 22rem", height: "12rem" }}>
              <div class="card-body">
                <h5 class="card-title text-center">{project.name}</h5>
                <h6 class="card-subtitle mt-4 mb-2 text-body-secondary">Assigned Date - {project.assignDate}</h6>
                <h6 class="card-subtitle mt-4 mb-2 text-body-secondary">Assigned Date - {project.expectedDate}</h6>
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

export default Projects

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





// import React , {useState} from 'react'
// import styled from "styled-components"


// const Projects = () => {

//   const [projectData, setProjectData] = useState([
//     {
//       name: "Task Management",
//       assignDate: "01-01-2023",
//       assignedTo: "Arjun"
//     },
//     {
//       name: "Task Management",
//       assignDate: "01-01-2023",
//       assignedTo: "Arjun"
//     },
//     {
//       name: "Task Management",
//       assignDate: "01-01-2023",
//       expectedDate:"10-10-2023",
//       assignedTo: "Arjun"
//     },
//   ]);

//   const assignProject=(newproject)=>{
//     setProjectData([...projectData,newproject]);
//   }

//   return (
//     <CardStyle>
//       <div>

//         <div className="top d-flex justify-content-between">
//           <div className="search ms-5 mt-4" >
//             <input type="text" placeholder="Search..." />

//           </div>
//           <div className='add '>
//             <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">New Project +</button>
//             <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//               <div class="modal-dialog">
//                 <div class="modal-content">
//                   <div class="modal-header">
//                     <h5 class="modal-title" id="staticBackdropLabel">Add Project Details</h5>
//                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                   </div>
//                   <div class="modal-body">
//                     <div class="row g-3 align-items-center">
//                       <div class="row mt-3 ">
//                         <div>
//                           <label class="form-label"><b>Project Name</b></label>
//                           <input type="text" class="form-control" placeholder="Enter project" />
//                         </div>
//                         <div class='d-flex justify-content-between mt-3'>
//                           <div>
//                             <label class="form-label"><b>Assign Date</b></label>
//                             <input type="date" class="form-control" />
//                           </div>
//                           <div>
//                             <label class="form-label"><b>Expected Date</b></label>
//                             <input type="date" class="form-control" />
//                           </div>
//                         </div>
//                         <div>
//                           <label class="form-label mt-3"><b>Assign To</b></label>
//                           <input type="text" class="form-control" placeholder="Person Name" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="modal-footer">
//                   <button
//                       type="button"
//                       className="btn btn-primary"
//                       onClick={() => {
//                         assignProject({
//                           // name: "New Project",
//                           // assignDate: "03-15-2023",
//                           // assignedTo: "sujeet"
//                         });
//                       }}
//                     >Add Project </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//         <div className=" row">
//           {projectData.map((project, index) => (
//             <div class="cardhover card ms-5 mt-4  " style={{ width: " 22rem", height: "13rem" }}>
//               <div class="card-body">
//                 <h5 class="card-title text-center">{project.name}</h5>
//                 <h6 class="card-subtitle mt-4 mb-2 text-body-secondary">Assigned Date - {project.assignDate}</h6>
//                 <h6 class="card-subtitle mt-4 mb-2 text-body-secondary">Expected Date - {project.expectedDate}</h6>
//                 <p class="card-text">Assigned To : {project.assignedTo}</p>
//                 <a href="*" class="card-link">more info.</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </CardStyle>

//   )
// }

// export default Projects

// const CardStyle = styled.div`
// .card{
//   background-color:#9CDFBE;
// }
// .add{
//   display:flex;
//   justify-content:flex-end;
//   margin-right:10%;
//   margin-top:2%;
//   .btn{
//     background-color:#818589; 
//     color:black;
//   }
// }

// .cardhover{
  
//     max-width: 100%;
//     height: auto;
//     border-radius: 8px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//     transition: transform 0.3s ease;
//     cursor: pointer;
//   }
  
//   .cardhover:hover {
//     transform: scale(1.1);
//   }

// // `

// // // //#9CDFBE





