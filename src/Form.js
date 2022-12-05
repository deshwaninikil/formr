// import { useState,useEffect } from 'react';
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <pre>{JSON.stringify(formValues, undefined, 7)}</pre> */}
              <h2 className="reg_heading">Registration</h2>
              <div className="regsform regcheck loginForm flw" id="regFormMain">
                <div className="form-group formRow">
                  <select
                    name="business"
                    id="business"
                    {...register("business", {
                      required: "Please select the option",
                    })}
                  >
                    <option value="" disabled selected>
                      Does your business have an app?
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="InProgress">In Progress</option>
                  </select>
                  {errors.business && (
                    <span className="errormsg">{errors.business.message}</span>
                  )}
                </div>

                <div className="dp_row dp_gap flexclmn_onlyMob">
                  <div className="form-group formRow">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name*"
                      {...register("firstName", {
                        required: "First name cannot be blank",
                      })}
                    />
                    {errors.firstName && (
                      <span className="errormsg">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group formRow">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name*"
                    
                      {...register("lastName", {
                        required: "Last name cannot be blank",
                      })}
                    />
                    {errors.lastName && (
                      <span className="errormsg">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="dp_row dp_gap flexclmn_onlyMob">
                  <div className="form-group formRow">
                    <input
                      type="text"
                      name="emailId"
                      id="emailId"
                      placeholder="Email*"
                      {...register("emailId", {
                        required: "Email cannot be blank",
                      })}
                    />
                    {errors.emailId && (
                      <span className="errormsg">{errors.emailId.message}</span>
                    )}
                  </div>

                  <div className="form-group formRow flexclmn_onlyMob">
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone Number*"
                      {...register("phoneNumber", {
                        required: "phoneno cannot be blank.",
                      })}
                    />
                    {errors.phoneNumber && (
                      <span className="errormsg">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="dp_row dp_gap flexclmn_onlyMob">
                  <div className="form-group formRow">
                    <input
                      type="text"
                      name="organisation"
                      id="organisation"
                      placeholder="Organisation Name*"
                      {...register("organisation", {
                        required: "Organisation cannot be blank",
                      })}
                    />
                    {errors.organisation && (
                      <span className="errormsg">
                        {errors.organisation.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group formRow">
                    <select
                      name="role"
                      id="role"
                      {...register("role", {
                        required: "Please select the role",
                      })}
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
                      <option value="ProductManager">Product Manager</option>
                      <option value="GrowthMarketing">Growth Marketing</option>
                      <option value="MarketingDirector">
                        Marketing Director
                      </option>
                      <option value="Others">Others</option>
                    </select>
                    {errors.role && (
                      <span className="errormsg">{errors.role.message}</span>
                    )}
                  </div>
                </div>
                <div className="buttonSubmit">
                  <button className="register_btn registernow">Submit</button>
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
