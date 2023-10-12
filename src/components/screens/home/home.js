import React from 'react'
import { Formik, Form } from "formik";
import { styled } from "styled-components";
import homeImage from "../../image/homeImage.png";


const Home = () => {
  return (
    <HomeStyle>
    <div className="d-md-flex  w-100">
      <div className=" right container-fluid  z mt-5">
     
      <img className="homeImage ms-md-3 " src={homeImage} alt="homeImage"/>

</div>
     
      <Formik>
        <Form className=" m-end mt-5 p-3 ms-1 me-5      formStyle ">
          <div class=" m-auto text-center fs-6 p-0">
            <b>Register Your Company</b>
          </div>
          <br></br>
          <div>
            <label class="form-label"><b>Company Name:</b> </label>
            <input type="text" placeholder="xyz" class="form-control" />
          </div>

          <div>
            <label for="exampleInputEmail1" class="form-label">
            <b> Company Email:</b>
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="xyz@gmail.com"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
  <div>
            <label class="form-label"><b>Company Contact-no:</b> </label>
            <input type="text" class="form-control"placeholder="...." />
          </div>

          

          <div>
            <label class="form-label"><b>Company Address:</b> </label>
            <input type="text" class="form-control" placeholder="Enter Full Address" />
          </div>

         
          <br></br>
          <button type="submit" className="btn  fs-5 mt-3 subMit mb-3">
            Register
          </button>
        </Form>
      </Formik>
      </div>
      <div class="pb-5">
      <p class="fs-1 d-flex justify-content-center mt-5 pt-5 ">Pricing</p>
        <i class="fa-solid fa-minus fs-1 num232" style={{marginLeft:"48%"}}></i>
        <p class="fs-6 ps-5 d-flex justify-content-center" style={{color:"#515253"}}>
         And here is our Budget Friendly Price Chart which helps you to buy some plans.
        </p>
        <div class="w-100 d-md-flex  justify-content-center">

        <div class="card1 mt-md-5 border border1 rounded-4 pb-md-5 w-100 ms-md-5" style={{height:"50%" }}>

<h4 class="d-flex justify-content-center mt-5 "><strong>Free Plan</strong></h4>
<p class="d-flex justify-content-center fs-1 mt-4">
    <i class="fa-solid fa-folder" style={{color:"#FB6B90"}}></i>
</p>
<div class="d-flex justify-content-center">
    <h4>
        <sup class="zeroc mt-4 pt-5 fs-4" style={{color:"#FB6B90"}}><strong>$</strong>
            <strong>0</strong></sup>
    </h4>
    <p>/ month</p>
</div>
<div class="ps-5">
    <ul class="list-unstyled">
    <li> <i class="fa-solid fa-check num232"></i>One Month Free Trial</li> 
    <li class="mt-2"><i class="fa-solid fa-check num232"></i> Free Plan/Friendly Budget</li>
    <li class="mt-2"><i class="fa-solid fa-xmark num232"></i> Monthly Plan/Rs499/Month</li>
    <li class="mt-2 na"><i class="fa-solid fa-xmark " style={{color: "#3a3a3a"}}></i>Yearly Plan/Rs1999/Year</li>
    <li class="mt-2"><i class="fa-solid fa-xmark" style={{color: "#3a3a3a"}}></i>Buy one year membership</li>
    </ul>
</div>
<div class="d-flex justify-content-center">
    <a type="button" class="btn btn-info mt-4" href="https://bootstrapmade.com/demo/Impact/">Buy Now</a>
</div>
</div>

<div class="card1  mt-md-2 border border-5 rounded-4 border-info pb-md-5 w-100"
                >
                <h4 class="d-flex justify-content-center mt-5"><strong>Monthly Plan</strong></h4>
                <p class="d-flex justify-content-center fs-1 mt-4">
                    <i class="fa-solid fa-plane"style={{color:"#FB6B90"}}></i>
                </p>
                <div class="d-flex justify-content-center">
                    <h4>
                        <sup class="zeroc mt-5 pt-5 fs-4 " style={{color:"#FB6B90"}}><strong>$</strong>
                            <strong>5.99</strong></sup>
                    </h4>
                    <p>/ month</p>
                </div>
                <div class="ms-5 ps-5 mt-4">
                    <ul class="list-unstyled">
                    <li> <i class="fa-solid fa-check num232"></i>Monthly Plan/Rs499/Month</li>
                    <li class="mt-3"><i class="fa-solid fa-xmark num232"></i> One Month Free Trial</li>
                    <li class="mt-3"><i class="fa-solid fa-xmark num232"></i> Free Plan/Friendly Budget</li>
                    <li class="mt-3"><i class="fa-solid fa-xmark num232"></i> Yearly Plan/Rs1999/Year</li>
                    <li class="mt-3"><i class="fa-solid fa-xmark num232"></i> Buy one year membership</li>
                    </ul>
                </div>
                <div class="d-flex justify-content-center">
                    <a type="button" class="btn btn-info mt-4" href="https://bootstrapmade.com/demo/Impact/">Buy Now</a>
                </div>

            </div>

<div class="card1  mt-md-5 border border1 rounded-4 pb-md-5 w-100 me-md-5" style={{height:"50%" }}>
                <h4 class="d-flex justify-content-center mt-5"><strong>Yearly Plan</strong></h4>
                <p class="d-flex justify-content-center fs-1 mt-4">
                    <i class="fa-brands fa-docker"style={{color:"#FB6B90"}}></i>
                </p>
                <div class="d-flex justify-content-center">
                    <h4>
                        <sup class="zeroc mt-5 pt-5 fs-4" style={{color:"#FB6B90"}}><strong>$</strong>
                            <strong>24.01</strong></sup>
                    </h4>
                    <p>/ year</p>
                </div>
                <div class="ms-5 ps-5">
                    <ul class="list-unstyled">
                   <li> <i class="fa-solid fa-check num232"></i>Buy one year membership</li>
                    <li class="mt-2"><i class="fa-solid fa-check num232"></i>Yearly Plan/Rs1999/Year</li>
                    <li class="mt-2"><i class="fa-solid fa-xmark num232"></i> One Month Free Trial</li>
                    <li class="mt-2"><i class="fa-solid fa-xmark num232"></i>Free Plan/Friendly Budget</li>
                    <li class="mt-2"><i class="fa-solid fa-xmark num232"></i>Monthly Plan/Rs499/Month</li>
                    </ul>
                </div>
                <div class="d-flex justify-content-center">
                    <a type="button" class="btn btn-info mt-4" href="https://bootstrapmade.com/demo/Impact/">Buy Now</a>
                </div>
            </div>



          </div>
      </div>
   
    </HomeStyle>
  )
}

export default Home;
const HomeStyle = styled.div`

*{
/* background-color: red; */


}
.formStyle{
  height: 595px;
  width:50%;
  background-color:#f8f9fa;
  
}
.formStyle:hover{
  background-color:#6699CC;
}
.subMit{
  margin-left:30%;
  background-color:#712cf9;
  color:white;
}
.color{
  color:#712cf9;
}
.right{
  height:100vh;
  /* background-image: url('https://images.unsplash.com/photo-1553034545-32d4cd2168f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'); */
}
.container1{
background-color:#FFE5D9;

}
.orange{
  color:#FF9800;
  font-style:oblique;
}
.container2{
background-color:#E1F8DC;

}
.green{
  color:#228B22;
  font-style:oblique;
}
.container3{
background-color:#FFE9EE;

}
.pink{
  color:#FF6EC7;
  font-style:oblique;
}
.homeImage{
  width:100%;
  height:100%;
  position: relative;
  animation-name: example;
  animation-duration: 3s;

}

.card1{
 background-color:white;
}
.card1:hover{
 background-color:#FFE4E1;
}
@keyframes example {
 50%  { width:1200px;}
 }
@media screen and (max-width:600px) {
  .formStyle{
   width:100%;
  }
  .homeImage{
    width:100%;
    animation:none;
  }
}
`;

