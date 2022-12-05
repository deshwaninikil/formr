import * as Yup from "yup";

export const signUpSchema = Yup.object({
  business: Yup.string().required("Does your business have an app?"),
  firstName: Yup.string().required("Please enter your firstName"),
  lastName: Yup.string().required("Please enter your lastName"),
  emailId: Yup.string().email().required("Please enter your email"),
  phoneNumber: Yup.string()
  .matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false})   
    .required("Please enter your phoneno"),
  organisation: Yup.string().min(3).required("Please enter your organisation"),
  role: Yup.string().required("Please select the role"),
});
