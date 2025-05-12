import * as yup from 'yup';
export const checkoutSchema=
yup.object().shape({
    fullname:yup.string().required("Full neme is required"),
    email:yup.string().required("Email is required"),
    address:yup.string().required("Address is required"),
    phone:yup.string().required("Phone number is required").matches(/^[0-9]+$/,"Phone must contain only numbers"),
    notes:yup.string().optional(),
    
});