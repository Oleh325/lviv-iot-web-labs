import React from "react";
import { CheckoutContainer, CheckoutTitle } from "./Checkout.styled";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { checkoutSchema } from "../../../schemas/index";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/slices/cartSlice";

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (values, actions) => {
        // await sendEmail();
        await new Promise((r) => setTimeout(r, 1000));
        actions.resetForm();
        dispatch(cartActions.clearCart());
        navigate("/cart/success");
    }

    return(
        <CheckoutContainer className="flex-column">
            <CheckoutTitle>Checkout</CheckoutTitle>
            <Formik initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: ""
            }}
            validationSchema={checkoutSchema}
            onSubmit={onSubmit} >
            {({ isSubmitting }) => (
                <Form className="flex-column">
                <div className="inputs flex-column">
                    <div className="small-inputs">
                        <CustomInput
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="Enter your First Name"
                        />
                        <CustomInput
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Enter your Last Name"
                        />
                    </div>
                    <div className="small-inputs">
                        <CustomInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter your Email"
                        />
                        <CustomInput
                            label="Phone"
                            name="phone"
                            type="text"
                            placeholder="Enter your Phone Number"
                        />
                    </div>
                    <CustomInput
                        label="Address"
                        name="address"
                        type="text"
                        placeholder="Enter your Shipping Address"
                    />
                </div>
                <div className="buttons">
                    <Link to="/cart" className="button-white"><div>Go back</div></Link>
                    <button disabled={isSubmitting} type="submit" className="button-gray">Continue</button>
                </div>
                </Form>
            )}
            </Formik>
        </CheckoutContainer>
    );
}

export default Checkout;