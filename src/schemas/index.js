import * as yup from "yup";

const firstNameRegex = /^[a-zA-Zа-яА-Я]+$/;
const lastNameRegex = /^[a-zA-Zа-яА-Я]+$/;
const usernameRegex = /^[a-zA-Z1-9]+$/;
//eslint-disable-next-line
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}$/im;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const optionsRegex = /^([a-zA-Zа-яА-Я]+[,]?[\s]?)+[,]?[\s]?([a-zA-Zа-яА-Я]+)$/;
const urlRegex = /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;

export const checkoutSchema = yup.object().shape({
    firstName: yup.string().matches(firstNameRegex, { message: "First Name shouldn't contain any characters!" })
    .required("First Name is required!"),
    lastName: yup.string().matches(lastNameRegex, { message: "Last Name shouldn't contain any characters!" })
    .required("Last Name is required!"),
    email: yup.string().email("Please, enter a valid email!").required("Email is required!"),
    phone: yup.string().matches(phoneRegex, { message: "Please, enter a valid phone number!" })
    .required("Phone Number is required!"),
    address: yup.string().required("Address is required!")
});

export const loginSchema = yup.object().shape({
    email: yup.string().required("Email is required!"),
    password: yup.string().required("Password is required!")
});

export const signupSchema = yup.object().shape({
    username: yup.string().matches(usernameRegex, { message: "Username shouldn't contain any characters!" })
    .max(45, "Username should be less than 45 characters long!").required("Userame is required!"),
    email: yup.string().email("Please, enter a valid email!").required("Email is required!"),
    password: yup.string().min(5, "Password should be at least 5 characters!")
    .matches(passwordRegex, { message: "Password should at least contain: 1 uppercase letter, 1 lowercase letter, 1 numeric digit" })
    .required("Password is required!"),
    retypePassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match!").required("Retype your password!")
});

export const addCatSchema = yup.object().shape({
    title: yup.string().required("Title is required!"),
    description: yup.string(),
    cuteness: yup.number().required("Cuteness is required!"),
    weight: yup.number().min(0.01, "Weight should be more than zero!").required("Weight is required!"),
    price: yup.number().min(0.01, "Price should be more than zero!").required("Price is required!"),
    color: yup.string().oneOf(["white", "black", "orange", "tabby","spotted"], "Available options: white, black, orange, tabby, spotted")
    .required("Color is required!"),
    options: yup.string().matches(optionsRegex, { message: "Please, list options seperated by commas!" }).required("Options are required!"),
    imagesrc: yup.string().matches(urlRegex, { message: "Please, enter valid url!" })
});

export const editCatSchema = yup.object().shape({
    title: yup.string().required("Title is required!"),
    description: yup.string(),
    cuteness: yup.number().required("Cuteness is required!"),
    weight: yup.number().min(0.01, "Weight should be more than zero!").required("Weight is required!"),
    price: yup.number().min(0.01, "Price should be more than zero!").required("Price is required!"),
    color: yup.string().oneOf(["white", "black", "orange", "tabby","spotted"], "Available options: white, black, orange, tabby, spotted")
    .required("Color is required!"),
    options: yup.string().matches(optionsRegex, { message: "Please, list options seperated by commas!" }).required("Options are required!"),
    imagesrc: yup.string().matches(urlRegex, { message: "Please, enter valid url!" })
});