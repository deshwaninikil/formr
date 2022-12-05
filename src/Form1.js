import "./App.css";
import axios from "axios";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  business: "",
  firstName: "",
  lastName: "",
  emailId: "",
  phoneNumber: "",
  organisation: "",
  role: "",
};
function App() {
  function getUrlParameter(sParam) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] === sParam) {
        return pair[1];
      }
    }
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        console.log(
          " ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        let serviceUrl = `https://etstgusers.economictimes.indiatimes.com/centralized-data-api/form/register`;
        let evntlabel = window.location.href;
        let platform = "";        
        if (window.innerWidth < 960) {
          platform = "Mobile";
        } else {
          platform = "Desktop";
        }

        let dataInput = {},userData = {},
          sendMail = {};
        dataInput["name"] = `${values.firstName}  ${values.lastName}`;
        dataInput["email"] = values.emailId;
        dataInput["mobile"] = values.phoneNumber;
        dataInput.input = {};

        //not using loop
        userData["business"] = values.business;
        userData["firstname"] = values.firstName;
        userData["lastname"] = values.lastName;
        userData["phoneNumber"] = values.phoneNumber;
        userData["organisation"] = values.organisation;
        userData["role"] = values.role;
        userData["agreeToshare"] = false;
        userData["utm_source"] = getUrlParameter("utm_source")
          ? getUrlParameter("utm_source")
          : "NA";
        userData["utm_medium"] = getUrlParameter("utm_medium")
          ? getUrlParameter("utm_medium")
          : "NA";
        userData["utm_campaign"] = getUrlParameter("utm_campaign")
          ? getUrlParameter("utm_campaign")
          : "NA";
        userData["source"] = platform;
        userData["sourceurl"] = evntlabel;

        sendMail["trigger"] = true;

        dataInput.input.userData = userData;
        dataInput.input.sendMail = sendMail;

        try {
          const data = await axios.post(serviceUrl, {
            headers: { clientId: `6360c804dd15e88936219925` },
            data: dataInput,
          });
          console.log(data);
        } catch (error) {
          console.log(error);
        }

        action.resetForm();
        console.log(dataInput);
      },
    });
  // console.log(
  //   " ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
  //   errors
  // );

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
              <h2 className="reg_heading">Registration</h2>
              <div className="regsform regcheck loginForm flw" id="regFormMain">
                <div className="form-group formRow">
                  <select
                    name="business"
                    id="business"
                    value={values.business}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled selected>
                      Does your business have an app?
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="InProgress">In Progress</option>
                  </select>
                  {errors.business && touched.business ? (
                    <span className="errormsg">{errors.business}</span>
                  ) : null}
                </div>

                <div className="dp_row dp_gap flexclmn_onlyMob">
                  <div className="form-group formRow">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name*"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.firstName && touched.firstName ? (
                      <span className="errormsg">{errors.firstName}</span>
                    ) : null}
                  </div>
                  <div className="form-group formRow">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name*"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.lastName && touched.lastName ? (
                      <span className="errormsg">{errors.lastName}</span>
                    ) : null}
                  </div>
                </div>

                <div className="dp_row dp_gap flexclmn_onlyMob">
                  <div className="form-group formRow">
                    <input
                      type="text"
                      name="emailId"
                      id="emailId"
                      placeholder="Email*"
                      value={values.emailId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.emailId && touched.emailId ? (
                      <span className="errormsg">{errors.emailId}</span>
                    ) : null}
                  </div>

                  <div className="form-group formRow flexclmn_onlyMob">
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone Number*"
                      maxLength={10}
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <span className="errormsg">{errors.phoneNumber}</span>
                    ) : null}
                  </div>
                </div>
                <div className="dp_row dp_gap flexclmn_onlyMob">
                  <div className="form-group formRow">
                    <input
                      type="text"
                      name="organisation"
                      id="organisation"
                      placeholder="Organisation Name*"
                      value={values.organisation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.organisation && touched.organisation ? (
                      <span className="errormsg">{errors.organisation}</span>
                    ) : null}
                  </div>

                  <div className="form-group formRow">
                    <select
                      name="role"
                      id="role"
                      value={values.role}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                    {errors.role && touched.role ? (
                      <span className="errormsg">{errors.role}</span>
                    ) : null}
                  </div>
                </div>
                <div className="buttonSubmit">
                  <button className="register_btn registernow">Submit</button>
                </div>
              </div>
            </form>
          </div>
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
