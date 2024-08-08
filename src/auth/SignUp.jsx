import React, { useEffect, useState } from "react";
import signupimg from "../assets/signupimg.svg";
import googleicon from "../assets/🦆 icon _google_.svg";
import orImg from "../assets/orimg.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema, SignUpSchema } from "../utils/Schema";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import "../styles/Sign.css";
const SignUp = () => {
  const [serverError, setServerError] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign Up |Page";
  });
  const {
    register,
    handleSubmit,control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  console.log(errors);
  const onSubmit = async (data) => {
    console.log(data);
    setIsClicked(true);
    try {
      setsuccessMsg("");
      setServerError("");
      const req= await fetch("https://beta-house-server.onrender.com/user/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log(res);
      if (!res.success || res.name === 'ValidationError') {
        setServerError(res.message);
        toast.error(res.message);
      }
      if (res.success) {
        setsuccessMsg(res.message);
        // toast.success(res.message);
        navigate("/signin");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsClicked(false);
    }
  };

  const btnText = isClicked ? Loading : "Sign Up";

  return (
    <>
      <main>
        <div className="">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 mt-5 ">
              <Form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <h4>
                  Join our community of home seekers and explore the
                  possibilities that await.
                </h4>
                <p>Lets get started by filling out the information below</p>
                {/* name div */}
                <div className="d-flex gap-4">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="label">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      {...register("firstName", { required: true })}
                    />
                    <p className="text-start fs-6 text-danger  fw-light">
                      {errors.firstName?.message}
                    </p>
                  </Form.Group>
                    {/* <Controller
                  control={control}
                  name="firstName"
                  render={({ onChange, value }) => (
                    <Form.Group className="mb-3">
                      <Form.Label className="label">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={value}
                        onChange={onChange}
                      />
                      <p className="text-start fs-6 text-danger fw-light">
                        {errors.firstName?.message}
                      </p>
                    </Form.Group>
                  )}
                /> */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="label">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      {...register("lastName", { required: true })}
                    />
                    <p className="text-start fs-6 text-danger  fw-light">
                      {errors.lastName?.message}
                    </p>
                  </Form.Group>
                </div>
                {/* email */}
                <Form.Group className="mb-3">
                  <Form.Label className="label">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                  />
                  <p className="text-start fs-6 text-danger  fw-light">
                    {errors.email?.message}
                  </p>
                </Form.Group>

                {/* password */}
                <Form.Group className="mb-3">
                  <Form.Label className="label">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <p className="text-start fs-6 text-danger  fw-light">
                    {errors.password?.message}
                  </p>
                </Form.Group>
                {/* confirm password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="label"> Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("confirmPassword", { required: true })}
                  />
                  <p className="text-start fs-6 text-danger  fw-light">
                    {errors.confirmPassword?.message}
                  </p>
                </Form.Group>
                {/* checkbox */}
                <div className="d-flex gap-2">
                  <Form.Group
                    className="mb-3 customize-checkbox"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check type="checkbox" />
                  </Form.Group>
                  <span>
                    I agree to{" "}
                    <a
                      href="#"
                      className="text-decoration-none text-success mb-2"
                    >
                      Terms of Service{" "}
                    </a>
                    and{" "}
                    <a href="#" className="text-decoration-none text-success">
                      {" "}
                      Privacy Policies
                    </a>
                  </span>
                </div>
                {serverError && <p className="text-danger">{serverError}</p>}
                {successMsg && <p className="text-success">{successMsg}</p>}
                {/* submit */}
                <Button
                  variant="success"
                  type="submit"
                  className="w-100 mb-3 mt-3"
                  disabled={isSubmitting}
                >
                  {btnText}
                </Button>
                <div className="ps-5 mt-2 mb-2 d-none d-lg-block">
                  <img src={orImg} alt="" />
                </div>
                <div className="ps-2 mt-2 mb-2 d-lg-none ">
                  <img src={orImg} alt="" className="w-100" />
                </div>
                {/* google signup */}
                <Button
                  variant="white border border-black"
                  type="submit"
                  className="w-100 mt-2"
                >
                  <div>
                    <a
                      href="http://"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      <img src={googleicon} alt="" className="ps-5" />
                      <span className="p-2 fw-bold text-dark">
                        {" "}
                        Continue with Google
                      </span>
                    </a>
                  </div>
                </Button>
                <div className="mt-3 text-center ">
                  <span className="text-center mt-5 fw-bold ">
                    Already have an account?{" "}
                  </span>
                  <Link
                    className="text-decoration-none text-success fw-bold  "
                    to="/SignIn"
                  >
                    Sign In
                  </Link>
                </div>
              </Form>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <img src={signupimg} alt="signupimg" className="img-fluid" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
