import { useState,useEffect } from 'react';
import './App.css';



function App() {  
  const initialValues = {
    business:"",
    firstName:"",
    lastName:"",
    emailId:"",
    phoneNumber:"",
    organisation:"",
    role:""
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regeph = /^[6789]\d{9}$/;
    
    if(!values.business){
      errors.business = "business is required!";
    }
    if(!values.firstName){
      errors.firstName = "firstName is required!";
    }
    if(!values.lastName){
      errors.lastName = "lastName is required!";
    }    
    if (!values.emailId) {
      errors.emailId = "Email is required!";
    } else if (!regex.test(values.emailId)) {
      errors.emailId = "This is not a valid email";
    }
    if(!values.phoneNumber){
      errors.phoneNumber = "phoneNumber is required!";
    }else if (!regeph.test(values.phoneNumber)) {
      errors.phoneNumber = "This is not a valid phoneno";
    }
    if(!values.organisation){
      errors.organisation = "organisation is required!";
    }
    if(!values.role){
      errors.role = "role is required!";
    }
    return errors;
  };
  
    
  
  return (
    <section className="registrationPage">
      <div className="dp_row">
        <div className="leftRegBox samewidth">
          <img
            src="https://economictimes.indiatimes.com/thumb/msid-95273541,width-481,resizemode-4/regMobile.jpg"
            alt="mobileImg"
          />
        </div>
        <div className="regFormMain">
          <div className="formSec">        
            
                <form onSubmit={handleSubmit}>
                  {/* <pre>{JSON.stringify(formValues, undefined, 7)}</pre> */}
                  <h2 className="reg_heading">Registration</h2>
                  <div
                    className="regsform regcheck loginForm flw"
                    id="regFormMain"
                  >
                    <div className="form-group formRow">
                      <select
                        name="business"
                        id="business"
                        value={formValues.business} 
                        onChange={handleChange}                                                                                               
                      >
                        <option value="" disabled selected>
                          Does your business have an app?
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="InProgress">In Progress</option>
                      </select>
                      <span
                        className="errormsg"                        
                      >{formErrors.business}</span>
                    </div>

                    <div className="dp_row dp_gap flexclmn_onlyMob">
                      <div className="form-group formRow">
                        <label
                          htmlFor="firstname"
                        >
                          <input
                            type="text"                          
                            name="firstName"
                            id="firstName"                         
                            placeholder="First Name*"     
                            value={formValues.firstName} 
                            onChange={handleChange}                    
                          />
                          <span
                            className="errormsg"                            
                          >{formErrors.firstName}</span>
                        </label>
                      </div>
                      <div className="form-group formRow">
                        <label
                          htmlFor="lastname"
                        >
                          <input
                            type="text"                            
                            name="lastName"
                            id="lastName"                                                 
                            placeholder="Last Name*" 
                            value={formValues.lastName}  
                            onChange={handleChange}                          
                          />
                          <span
                            className="errormsg"                            
                          >{formErrors.lastName}</span>
                        </label>
                      </div>
                    </div>

                    <div className="dp_row dp_gap flexclmn_onlyMob">
                      <div className="form-group formRow">
                        <label
                          htmlFor="firstname"
                        >
                          <input
                            type="text"                            
                            name="emailId"
                            id="emailId"                          
                            placeholder="Email*"
                            value={formValues.emailId}    
                            onChange={handleChange}                       
                          />
                          <span
                            className="errormsg"                            
                          >{formErrors.emailId}</span>
                        </label>
                      </div>

                      <div className="form-group formRow flexclmn_onlyMob">
                        <label
                          htmlFor="phoneno"
                        >
                          <input
                            type="text"
                            name="phoneNumber"   
                            id="phoneNumber"                        
                            placeholder="Phone Number*"  
                            maxLength={10}                                               
                            value={formValues.phoneNumber} 
                            onChange={handleChange}  
                          />
                          <span
                            className="errormsg"                            
                          >{formErrors.phoneNumber}</span>
                        </label>
                      </div>
                    </div>
                    <div className="dp_row dp_gap flexclmn_onlyMob">
                      <div className="form-group formRow">
                        <label
                          htmlFor="organisation"
                        >
                          <input
                            type="text"                            
                            name="organisation"
                            id="organisation"                            
                            placeholder="Organisation Name*"
                            value={formValues.organisation} 
                            onChange={handleChange}  
                          />
                          <span
                            className="errormsg"                            
                          >{formErrors.organisation}</span>
                        </label>
                      </div>

                      <div className="form-group formRow">
                        <select
                          name="role"
                          id="role"
                          value={formValues.role} 
                          onChange={handleChange} 
                        >
                          <option value="" disabled selected>
                            Role
                          </option>
                          <option value="ChiefMarketingOfficer">
                            Chief Marketing Officer
                          </option>
                          <option value="VP-Marketing">VP-Marketing</option>
                          <option value="DigitalMarketingManager">
                            Digital Marketing Manager
                          </option>
                          <option value="OnlineCampaignManager">
                            Online Campaign Manager
                          </option>
                          <option value="MobileMarketingManager">
                            Mobile Marketing Manager
                          </option>
                          <option value="UserAcquisitionManager">
                            User Acquisition Manager
                          </option>
                          <option value="PerformanceMarketingManager">
                            Performance Marketing Manager
                          </option>
                          <option value="AppMarketingManager">
                            App Marketing Manager
                          </option>
                          <option value="ProductManager">
                            Product Manager
                          </option>
                          <option value="GrowthMarketing">
                            Growth Marketing
                          </option>
                          <option value="MarketingDirector">
                            Marketing Director
                          </option>
                          <option value="Others">Others</option>
                        </select>
                        <span
                          className="errormsg"                          
                        >{formErrors.role}</span>
                      </div>
                    </div>
                    <div className="buttonSubmit">
                      <button                        
                        className="register_btn registernow"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>                          
          </div>
          {/* <section className="regmodel">
                  <include-html>/dp_modelpopup.cms</include-html>
              </section> */}
        </div>
      </div>
      <section className="footerImg">
        <div className="footerabove_img">
          <img
            className="mainfooterimg"
            src="https://img.etimg.com/photo/95273758.cms"
            alt="footeraboveImg"
          />
        </div>
      </section>
    </section>
  );
}

export default App;
