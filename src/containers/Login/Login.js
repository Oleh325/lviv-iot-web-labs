import React from "react";
import { LoginContainer } from "./Login.styled";
import { Formik, Form } from "formik";
import CustomInput from "../Cart/Checkout/CustomInput";
import { loginSchema } from "../../schemas/index";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        console.log(values);
        // await sendEmail();
        await new Promise((r) => setTimeout(r, 1000));
        actions.resetForm();
        navigate("/");
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
            <Form className="form">
                <div className="title">Submit the form to sign in</div>
                <div className="inputs">
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
                </div>
                <div className="login-footer">
                    <div className="not-a-member">
                        <div>Not a member?</div>
                        <Link to="/signup" className="sign-up">Sign Up</Link>
                    </div>
                    <button disabled={isSubmitting} type="submit" className="login-button">Login</button>
                </div>
            </Form>
            )}
        </Formik>
    </LoginContainer>
    )
}

export default Login;