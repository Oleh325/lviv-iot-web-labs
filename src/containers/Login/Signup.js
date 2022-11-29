import React from "react";
import { SignupContainer } from "./Signup.syled";
import { Formik, Form } from "formik";
import CustomInput from "../Cart/Checkout/CustomInput";
import { signupSchema } from "../../schemas/index";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        console.log(values);
        // await sendEmail();
        await new Promise((r) => setTimeout(r, 1000));
        actions.resetForm();
        navigate("/");
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
                    <button disabled={isSubmitting} type="submit" className="signup-button">Sign Up</button>
                </div>
            </Form>
            )}
        </Formik>
    </SignupContainer>
    )
}

export default Signup;