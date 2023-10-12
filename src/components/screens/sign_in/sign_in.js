// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXURlXBegA1kXV276yIEenT-D9lD8rihZ32oXHZOsJcy9Zkpwa&s
import React from "react";
import { Formik, Form } from "formik";
import { styled } from "styled-components";

const SignIn = () => {
  return (
    <FormStyle>
      <Formik>
        <Form className="  m-auto  ps-5 pe-5 pt-2   rounded bg-white   formStyle ">
          <div class=" m-auto text-center fs-6 p-0">
            <img
              alt=""
              class="img-fluid mt-0"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx46XdDAEYclMgK34ofgxwy-YJHt0V9M0Rk87dQsHKiVFFAC4&s"
            />
            <p>
              <b>Please enter some details</b>
            </p>
          </div>

          <div class="d-flex justify-content-between mt-5">

          <div>
            <label class="form-label"><b>Enter code:</b></label>
            <input type="text" placeholder="..." class="form-control formButton" />
          </div>

          <div >
            <label class="form-label "><b>Name:</b></label>
            <input type="text" placeholder="xyz" class="form-control" />
          </div>

          <div >
            <label for="exampleInputEmail1" class="form-label ">
             <b> Email: </b>
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="xyz@gmail.com"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          </div>

<div class="d-flex justify-content-between mt-5">
          <div>
            <label for="exampleInputPassword1" class="form-label">
             <b> Generate Password:</b>
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="use strong password"
              id="exampleInputPassword1"
            />
          </div>

          <div>
            <label for="exampleInputPassword1" class="form-label">
              <b> Re-Type Password: </b>
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Re-enter password"
              id="exampleInputPassword1"
            />
          </div>

          <div>
            <label class="form-label"><b>Contact no: </b></label>
            <input type="text" class="form-control"placeholder="...." />
          </div>
          </div>

          <div class="d-flex justify-content-between mt-5">
          <div>
            <label class="form-label"><b>Role:</b></label>
            <select class="form-control" name="roles" id="roles" placeholder="Choose Your Role">
              <optgroup label="Roles" >
                <option disabled selected>Choose Your Role</option>
                <option value="Super Admin>">Super Admin</option>
                <option value="Admin>">Admin</option>
                <option value="member">Memeber</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label class="form-label"><b>State</b></label>
            <input type="text" class="form-control" placeholder="Enter State" />
          </div>

          <div>
            <label class="form-label"><b>City</b></label>
            <input type="text" class="form-control" placeholder="Enter City" />
          </div>
          </div>
          <br></br>
          <button type="submit" className="btn  subMit mt-5">
            Sign In
          </button>
        </Form>
      </Formik>
    </FormStyle>
  );
};

export default SignIn;
const FormStyle = styled.div`

.formStyle{
/* border:1px solid #712cf9; */
width:80%;
}
.subMit{
  margin-left:45%;
  background-color:#712cf9;
  color:white;
}
.color{
  color:#712cf9;
}

@media screen and (max-width:600px) {
  .formStyle{
   width:90%;
  }
}
`;
