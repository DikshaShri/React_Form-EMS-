
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
        <center><h1 class="heading">Employee Registration Form</h1></center>
      
      <form id="empform" onSubmit={getFormData}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>First Name
              <input type="text" class="form-control" value={fname} name="first_name" required onChange={(e)=>setFname(e.target.value)}></input>
            </label>
          </div>
          <br/>
          <div class="form-group col-md-6">
            <label>Last Name
              <input type="text" class="form-control" value={lname} name="last_name" required onChange={(e)=>setLname(e.target.value)}></input>
            </label>
          </div>
          <div class="form-group col-md-6">
            <label>Address
              <textarea name="address" class="form-control" value={address} required onChange={(e)=>setAddress(e.target.value)}></textarea>
            </label>
          </div>
          <br></br>
          <div class="form-group col-md-6">
            <label>Phone No.
              <input type="text" class="form-control" value={phone} name="phone" required onChange={(e)=>setPhone(e.target.value)}></input>
            </label>
            </div>
            <br />
            <div class="form-group col-md-6">
              <label>Role
                <select name="role" class="form-select" value={role} required onChange={(e)=>setRole(e.target.value)}>
                <option selected></option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Team_Member</option>
                  <option>HR</option>
                  <option>Sales</option>
                </select>
              </label>
              </div>
            <br></br>
            <div class="form-group col-md-6">
              <label>Password
                <input type="password" class="form-control" value={password} required name="password" onChange={(e)=>setPassword(e.target.value)}></input>
              </label>
              </div>
              <br></br>
              <center>
              <div class="form-group col-md-6">
                <button class="btn btn-primary" type="submit">Submit</button>
              </div>
              </center>
          </div>
      </form>  
      
    </div>
    
  );
}

export default App;
