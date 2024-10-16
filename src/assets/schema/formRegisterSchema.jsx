import * as yup from "yup";

export const formRegisterSchema = yup.object().shape({
    name: yup.string().required("must be filled !"),
    surname: yup.string().required("must be filled!"),
    username: yup.string().required("must be filled!"),
    email: yup.string().email("Please enter a valid email address").required("must be filled !"),
    password: yup.string().required("must be filled!"),
    repeatPassword: yup.string().required().oneOf([yup.ref("password"),yup.password],"must match password"),
    terms: yup.boolean().oneOf([true], "please confirm the terms").required(),
})