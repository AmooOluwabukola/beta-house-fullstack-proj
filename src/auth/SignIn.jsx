import React, { useEffect, useState } from "react";
import signupimg from "../assets/signupimg.svg";
import googleicon from "../assets/🦆 icon _google_.svg";
import orImg from "../assets/orimg.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema, } from "../utils/Schema";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import "../styles/Sign.css";
const SignIn= () => {
  const [serverError, setServerError] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign In |Page";
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  console.log(errors);
  const onSubmit = async (data) => {
    console.log(data);
    setIsClicked(true);
    try {
      setsuccessMsg("");
      setServerError("");
      const req = await fetch("https://beta-house-server.onrender.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log(res);
      if (!res.success) {
        toast.error(res.message);
      
      }
      if (res.success) {
        toast.success(res.message);
        localStorage.setItem("clientToken", res.user.token);
    
         // Decode token to get userId
         const decodedToken = jwtDecode(res.user.token);
         const userId = decodedToken.userId;
         console.log(userId); // Log the userId to verify it is present
         localStorage.setItem("userId", userId);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsClicked(false);
    }
  };


  return (
    <>
      <main className="">
        <div className="">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 mt-5 ">
              <Form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <h4>
                Welcome Back to BetaHouse!
                </h4>
                <p>Lets get started by filling out the information below</p>
               
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
               
                {/* checkbox */}
                <div className="">
                  <Form.Group
                    className="mb-3 custom-check"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check type="checkbox"  label="Remember Me"/>
                  </Form.Group>
                 
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
                 Sign In
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
                    New User?{" "}
                  </span>
                  <Link
                    className="text-decoration-none text-success fw-bold  "
                    to="/SignUp"
                  >
                    Sign Up
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

export default SignIn;
