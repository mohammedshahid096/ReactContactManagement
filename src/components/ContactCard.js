import React from 'react';
// import userimg from "./userimg.jpg";

function ContactCard(props){
  // console.log(props.contactname);
    const{id,name,email} = props.contactname;
  return (
    <>
    <hr />
    <span><i className="fas fa-user-circle" id='userimg'></i></span>
    <div>
      <h4> 
      {name}</h4>
      <p> {email} </p>
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