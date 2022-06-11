import React,{useState} from "react";

function Main(props) {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState(false);
  const submitfunction =(e)=>{
    e.preventDefault();
    if(name === "" || phone === "" || !isNaN(phone) !== true )
    {
      if(name==="")
      {
       seterror("Enter the name");
      }
      else if(phone===""){
        seterror("Enter the phone");
      }
     else{
        seterror("Phone Number should be in Numeric");
      }
      return;
    }
    seterror(false);
    props.tempfuncall({name,phone,email});
    setname("");
    setphone("");
    setemail("");
    document.getElementById("formcontactSubmit").reset();
  }
  
  // let tempvar = "welcome";
  return (
    <div className="container">
      {!error?"":
           <div className="alert alert-danger p-2" role="alert">
           <center>
         <h5>  {error}</h5>
           </center>
         </div>
      }
 
      <form id="formcontactSubmit">
        
      <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Contact Name"
            onChange={(e)=>setname(e.target.value)}
          />
        </div>
      <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">Phone.No</label>
          <input
            type="phone"
            className="form-control"
            placeholder="phone no"
            onChange={(e)=>setphone( e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e)=>setemail(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary mt-4"
          // onClick={() => props.tempfuncall({name,phone,email})}  //return directly to parent functin
          onClick={submitfunction}
        >
          Add
        </button>
        {/* &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="reset" text="clear" className="btn btn-primary mt-4" /> */}
      </form>
    </div>
  );
}

export default Main;
