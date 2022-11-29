import * as yup from "yup";

const firstNameRegex = /^[a-zA-Zа-яА-Я]+$/;
const lastNameRegex = /^[a-zA-Zа-яА-Я]+$/;
const usernameRegex = /^[a-zA-Z1-9]+$/;
//eslint-disable-next-line
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}$/im;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const checkoutSchema = yup.object().shape({
    firstName: yup.string().matches(firstNameRegex, { message: "First Name shouldn't contain any characters!" }).required("First Name is required!"),
    lastName: yup.string().matches(lastNameRegex, { message: "Last Name shouldn't contain any characters!" }).required("Last Name is required!"),
    email: yup.string().email("Please, enter a valid email!").required("Email is required!"),
    phone: yup.string().matches(phoneRegex, { message: "Please, enter a valid phone number!" }).required("Phone Number is required!"),
    address: yup.string().required("Address is required!")
});

export const loginSchema = yup.object().shape({
    email: yup.string().required("Email is required!"),
    password: yup.string().required("Password is required!")
});

export const signupSchema = yup.object().shape({
    username: yup.string().matches(usernameRegex, { message: "Username shouldn't contain any characters!" }).required("Userame is required!"),
    email: yup.string().email("Please, enter a valid email!").required("Email is required!"),
    password: yup.string().min(5, "Password should be at least 5 characters!").matches(passwordRegex, { message: "Password should at least contain: 1 uppercase letter, 1 lowercase letter, 1 numeric digit" }).required("Password is required!"),
    retypePassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match!").required("Retype your password!")
});