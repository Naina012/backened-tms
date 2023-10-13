import React from 'react'
import styled from 'styled-components';
const create = () => {
  return (
    <Create>
    <div>
      <div class="Button1">
<button type="button" class="  btn btn-primary m-auto d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Create User +
</button>
</div>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Create User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Name -
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </Create>
  )
}

export default create
const Create =styled.div`

.Button1{
  margin-top:18%;
}

`;
