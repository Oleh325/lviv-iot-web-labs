import * as yup from "yup";

const firstNameRegex = /^[a-zA-Zа-яА-Я]+$/;
const lastNameRegex = /^[a-zA-Zа-яА-Я]+$/;
//eslint-disable-next-line
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}$/im;

export const checkoutSchema = yup.object().shape({
    firstName: yup.string().matches(firstNameRegex, { message: "First Name shouldn't contain any characters!" }).required("First Name is required!"),
    lastName: yup.string().matches(lastNameRegex, { message: "Last Name shouldn't contain any characters!" }).required("Last Name is required!"),
    email: yup.string().email("Please, enter a valid email!").required("Email is required!"),
    phone: yup.string().matches(phoneRegex, { message: "Please, enter a valid phone number!" }).required("Phone Number is required!"),
    address: yup.string().required("Address is required!")
});