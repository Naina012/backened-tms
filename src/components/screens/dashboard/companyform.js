import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-3' style={{maxWidth: '800px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create Your Company</h2>
          <MDBInput wrapperClass='mb-2' label='Company Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-2' label='Location' size='lg' id='form2' type='text'/>
          <MDBInput wrapperClass='mb-2' label='Company mail' size='lg' id='form3' type='email'/>
          <MDBInput wrapperClass='mb-2' label='Pan' size='lg' id='form4' type='text'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Submit</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;