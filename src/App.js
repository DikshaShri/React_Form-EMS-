
import {useState} from "react";

function App() {
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [address,setAddress]=useState("");
  const [phone,setPhone]=useState("");
  const [role,setRole]=useState("");
  const [password,setPassword]=useState("");

  function getFormData(e)
  {
    e.preventDefault();
    console.log(fname,lname,address,phone,role,password);
    setFname("");
    setLname("");
    setAddress("");
    setPhone("");
    setRole("");
    setPassword("");

  }

  return (
    <div className="App">
        <center><h1 className="heading">Employee Registration Form</h1></center>
      <div className="empform">
      <form onSubmit={getFormData}>
        <div>
          <div class="form-group col-md-6">
            <label className="emplabel">First Name
              <input type="text" className="form-control" value={fname} name="first_name" required onChange={(e)=>setFname(e.target.value)}></input>
            </label>
          </div>
          <br/>
          <div class="form-group col-md-6">
            <label className="emplabel">Last Name
              <input type="text" className="form-control" value={lname} name="last_name" required onChange={(e)=>setLname(e.target.value)}></input>
            </label>
          </div>
          <div class="form-group col-md-6">
            <label className="emplabel">Address
              <textarea name="address" className="form-control" value={address} required onChange={(e)=>setAddress(e.target.value)}></textarea>
            </label>
          </div>
          <br></br>
          <div className="form-group col-md-6">
            <label className="emplabel">Phone No.
              <input type="text" className="form-control" value={phone} name="phone" required onChange={(e)=>setPhone(e.target.value)}></input>
            </label>
            </div>
            <br />
            <div class="form-group col-md-6">
              <label className="emplabel">Role
                <select name="role" className="form-select" value={role} required onChange={(e)=>setRole(e.target.value)}>
                <option value="" disabled selected>Select a role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Team_Member">Team Member</option>
                <option value="HR">HR</option>
                <option value="Sales">Sales</option>
                </select>
              </label>
              </div>
            <br></br>
            <div class="form-group col-md-6">
              <label className="emplabel">Password
                <input type="password" className="form-control" value={password} required name="password" onChange={(e)=>setPassword(e.target.value)}></input>
              </label>
              </div>
              <br></br>
              <center>
              <div class="form-group col-md-6">
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
              </center>
          </div>
      </form>  
      </div>
    </div>
    
  );
}

export default App;
