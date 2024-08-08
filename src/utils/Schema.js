import * as yup from "yup"

export const SignUpSchema = yup
.object({
    email: yup.string().required("Email is required").email("invalid email format"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    password: yup.string().required("password is required").min(8, "minimum lenght must be atleast 8 characters"),
    confirmPassword: yup.string().required("confirm password is required").min(8, "minimum lenght must be atleast 8 characters").oneOf([yup.ref("password")], "password do not match"),
  })
  .required()

  // sign in
export const signInSchema = yup
.object({
  email: yup.string().required("Email is required").email("invalid email format"),
  password: yup.string().required("password is required").min(8, "minimum lenght must be atleast 8 characters"),
 
})
.required()