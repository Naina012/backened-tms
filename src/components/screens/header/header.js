import React  from 'react'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
const Headers= () => {
  
  return (
    <HeaderStyle>
    <div className='color'>
     <nav class="navbar navbar-expand-lg  ">
 
  <div class="container m-auto ">
    <span class="d-block d-sm-flex">
      <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6cYkCtUDRKbgetx6fC4rOcN3IkCsGWCalCr27v4ksAHMjKh_Z&s" className='logo '/>
      
      
    <li class=" text-white list-unstyled  fs-5 mt-2 ms-1 spacing-none" >Task Mangement</li>
    
    </span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
       </li>
      <li class="nav-item">
          <Link to="/" class="nav-link text-capitalize text-white m-1" href="#">Home
         <i class="fa-sharp fa-solid fa-house  fa-md ms-1" style={{color: '#ffffff'}}></i>
         </Link>
        </li>
        <li class="nav-item">
          <Link to="/dashboard" class="nav-link text-capitalize text-white m-1" href="#">Dashboard
         <i class="fa-sharp fa-light fa-table-columns  fa-md ms-1" style={{color: '#ffffff'}}></i>
         </Link>
        </li>
        <li class="nav-item">
          <Link to="/signIn" class="nav-link text-capitalize text-white m-1" href="#">Sign in
          <i class="fa-sharp fa-regular fa-handshake fa-md ms-1" style={{color: '#ffffff'}}></i>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/login" class="nav-link text-capitalize text-white m-1" href="#">Login 
          <i class="fa-sharp fa-solid fa-user-pen fa-sm ms-1" style={{color: '#ffffff'}}></i>
          </Link>
        </li>
        <li class="nav-item">
          <span class="nav-link text-capitalize text-white m-1" href="#">Logout
          <i class="fa-sharp fa-solid fa-user-lock fa-sm ms-1" style={{color: '#ffffff'}}></i>
          </span>
        </li>
     
      </ul>
    
    </div>
  </div>
</nav>
    </div>
    </HeaderStyle>
  );
}

export default Headers;

const HeaderStyle=styled.div`

.color{
 background-color:#6699CC;
}
.logo{
  width:15%;
  background-color:#6699CC;
}

`;

