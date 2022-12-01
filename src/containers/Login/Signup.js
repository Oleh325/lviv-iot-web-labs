import React, { useState } from "react";
import axios from "../../api/axios";
import { SignupContainer } from "./Signup.syled";
import { Formik, Form } from "formik";
import CustomInput from "../Cart/Checkout/CustomInput";
import { signupSchema } from "../../schemas/index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";

const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const onSubmit = async (values, actions) => {
        try {
            const user = values.username;
            const email = values.email;
            const password = values.password;
            await axios.post("/auth/signup",
                JSON.stringify({ user, email, password }),
                {
                    headers: { "Content-Type": "application/json" }
                }
            );
            const response = await axios.post("/auth/login",
                JSON.stringify({ email, password }),
                {
                    headers: { "Content-Type": "application/json" }, 
                    withCredentials: true
                });
            dispatch(authActions.setCredentials({ ...response?.data }));
            actions.resetForm();
            navigate("/");
        } catch (err) {
            if (!err?.response) {
                setError("No Server Response");
            } else if (err.response?.status === 409) {
                setError(err.response?.data?.error);
            } else {
                setError(err?.message);
            }
        }
    }

    return (
    <SignupContainer>
        <Formik initialValues={{
            username: "",
            email: "",
            password: "",
            retypePassword: ""
        }}
        validationSchema={signupSchema}
        onSubmit={onSubmit} >
        {({ isSubmitting }) => (
            <Form className="form">
                <div className="title">Register a new account</div>
                <div className="inputs">
                    <CustomInput
                        name="username"
                        type="text"
                        placeholder="Username"
                        autoFocus
                    />
                    <CustomInput
                        name="email"
                        type="email"
                        placeholder="E-mail"
                    />
                    <CustomInput
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <CustomInput
                        name="retypePassword"
                        type="password"
                        placeholder="Retype password"
                    />
                </div>
                <div className="signup-footer">
                    <div className="already-a-member">
                        <div>Already a member?</div>
                        <Link to="/login" className="login">Login</Link>
                    </div>
                    <div className="footer-right">
                        {error !== "" && <div className="global-error">{error}</div>}
                        <button disabled={isSubmitting} type="submit" className="signup-button">Sign Up</button>
                    </div>
                </div>
            </Form>
            )}
        </Formik>
    </SignupContainer>
    )
}

export default Signup;