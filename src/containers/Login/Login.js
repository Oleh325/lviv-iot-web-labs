import React, { useState } from "react";
import { LoginContainer } from "./Login.styled";
import { Formik, Form } from "formik";
import CustomInput from "../Cart/Checkout/CustomInput";
import { loginSchema } from "../../schemas/index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
import axios from "../../api/axios";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const onSubmit = async (values, actions) => {
        try {
            const email = values.email;
            const password = values.password;
            const response = await axios.post("/auth/login",
                JSON.stringify({ email, password }),
                {
                    headers: { "Content-Type": "application/json" }, 
                    withCredentials: true
                });
            dispatch(authActions.setCredentials({ ...response?.data }));
            actions.resetForm();
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setError("No Server Response");
            } else {
                setError(err?.response?.data?.error);
            }
        }
    }

    return (
    <LoginContainer>
        <Formik initialValues={{
            email: "",
            password: ""
        }}
        validationSchema={loginSchema}
        onSubmit={onSubmit} >
        {({ isSubmitting }) => (
            <Form className="form flex-column">
                <div className="title">Submit the form to sign in</div>
                <div className="inputs flex-column">
                    <CustomInput
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        autoFocus
                    />
                    <CustomInput
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div className="login-footer">
                    <div className="not-a-member">
                        <div>Not a member?</div>
                        <Link to="/signup" className="sign-up">Sign Up</Link>
                    </div>
                    <div className="footer-right">
                        {error !== "" && <div className="global-error">{error}</div>}
                        <button disabled={isSubmitting} type="submit" className="login-button">Login</button>
                    </div>
                </div>
            </Form>
            )}
        </Formik>
    </LoginContainer>
    )
}

export default Login;