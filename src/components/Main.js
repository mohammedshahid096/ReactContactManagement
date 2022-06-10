import React,{useState} from "react";

function Main(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  // let tempvar = "welcome";
  return (
    <div className="container">
      <form>
        
      <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Contact Name"
            // value="hello"
            onChange={(e)=>setname(e.target.value)}
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
            // value="testing@gmail.com"
            onChange={(e)=>setemail(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={() => props.tempfuncall({name,email})}
          // onClick={()=>props.tempfuncall(tempvar)}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Main;
