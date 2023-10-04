import React from 'react';
import { Formik, Form } from "formik";
import { styled } from "styled-components";

const Login = () => {
  return (
    <FormStyle>
      <Formik>
        <Form className="  m-auto mt-5 ps-5 pe-5 pt-2   rounded bg-white   formStyle ">
          <div class=" m-auto text-center fs-6 p-0">
            <img
              alt=""
              class="img-fluid image "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigV1mY6RtsxFfNDb8qDCUTbcb4nre3KGR4a7bTxnpUABMMDyC&s"
            />
            <p>
              <b>Just last step for enter in your Dashboard</b>
            </p>
          </div>

          <div>
            <label for="exampleInputEmail1" class="form-label">
              Email:
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
            <label for="exampleInputPassword1" class="form-label">
              Password:
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="..."
              id="exampleInputPassword1"
            />
          </div>

        <br></br>
          <button type="submit" className="btn  subMit mb-3">
            Login
          </button>
        </Form>
      </Formik>
    </FormStyle>
  );
};

export default Login;
const FormStyle = styled.div`

.formStyle{
/* border:1px solid #712cf9; */
width:40%;
}
.subMit{
  margin-left:40%;
  background-color:#712cf9;
  color:white;
}
.color{
  color:#712cf9;
}
.image{
  width:35%;
}

@media screen and (max-width:600px) {
  .formStyle{
   width:90%;
  }
}
`;
