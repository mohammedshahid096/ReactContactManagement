import React from 'react';
// import userimg from "./userimg.jpg";

function ContactCard(props){
    const{id,name,phone,email} = props.contactname;
  return (
    <>
    <hr />
    <span><i className="fas fa-user-circle" id='userimg'></i></span>
    <div>
      <h4>  {name}</h4>
    <div className="row">
      <div className="col-sm-2">{phone}</div>
      <div className="col">{email}</div>
    </div>
    </div>
    <div>
    <i className="fa-solid fa-trash-can" id='icondelete' onClick={()=>props.deletefun(id)
  }
    ></i>
    </div>
</>
  )
}

export default ContactCard