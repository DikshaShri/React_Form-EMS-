import {useState} from "react";
import image from './image/image.jpg'; 
function TempForm() {
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [title,setTitle]=useState("");
    const [email_address,setEmailAddress]=useState("");
    const [phone,setPhone]=useState("");
    const [extension,setExtension]=useState("");
    const [notes,setNotes]=useState("");
    const [mobile,setMobile]=useState("");
    const [p_image,setP_image]=useState("");

  
    function getFormData(e)
    {
      e.preventDefault();
    //   console.log(fname,lname,address,phone,role,password);
    //   setFname("");
    //   setLname("");
    //   setAddress("");
    //   setPhone("");
    //   setRole("");
    //   setPassword("");
  
    }
  
    return (
      <div className="tempform">
        <h1 className="tempHeading">Update Contact Details</h1>
        <form onSubmit={getFormData}>
          <div className="rowDisplay">
            <div className="form-group col-md-6" >
                <label>First Name
                    <input type="text" class="form-control" id="fname"/>
                </label>
            </div>
            <div className="form-group col-md-6">
                <label class="setLable1">Last Name
                  <input type="text" class="form-control" id="lname"/>
                </label>
            </div>
            <div className="form-group col-md-6">
                <label class="setLable2">Title
                  <input type="text" class="form-control" id="title"/>
                </label>
            </div>
          </div>
          
          <div className="rowDisplay">
            <div className="form-group col-md-6" >
                <label>Email Address
                    <input type="text" class="form-control"/>
                </label>
            </div>
            <div className="form-group col-md-6">
                <label class="setLable1">Phone
                  <input type="text" class="form-control" />
                </label>
            </div>
            <div className="form-group col-md-6">
                <label class="setLable2">Extension
                  <input type="text" class="form-control" />
                </label>
            </div>
          </div>
          
          <div className="rowDisplay">
            <div className="form-group col-md-6" >
                <label>Contact Notes
                    <textarea class="textarea-control"/>
                </label>
            </div>
            
            <div className="form-group col-md-6">
                <label class="setLableMobile">Mobile
                  <input type="text" class="form-control"/>
                </label>
            </div>
          </div>

          <div className="rowDisplay">
            <div className="form-group col-md-6">
              <label for="exampleFormControlFile1">Profile Image<br/>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
              </label>
            </div>
            <div className="form-group col-md-6">
              <img className="img1" src={image} alt=""/>
            </div>
            <div className="form-group col-md-6">
              <div class="form-check">
                <b>Access Privileges:</b><br></br>
                <label class="form-check-label">Primary Contact
                  <input class="form-check-input" type="checkbox"/>
                </label>
              </div>
            </div>

            <div className="form-group col-md-6">
              <div className="settings">
                <b>Settings:</b><br></br>
                <a href="#">Reset password</a>
              </div>
            </div>
          </div>  

          <div className="btns">
            <button class="btn_update">Update</button>
            <button class="btn_cancel">Cancel</button>
          </div>
        </form> 
      </div>  
    );
  }
  
  export default TempForm;
  