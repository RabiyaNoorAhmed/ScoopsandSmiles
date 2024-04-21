import React from 'react'
import { Typography, TextField, Box, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik'
import * as Yup from 'yup'
const Contact = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Please Enter Your Full Name"),
            lastName: Yup.string().required("Please Enter Your Last Name"),
            phone: Yup.string().required("Please Enter Your Phone Number"),
            email: Yup.string().required("Please Enter Your Email Address"),
            message: Yup.string().required("Please Enter Your Message")
        }),
        onSubmit: (values) => {
            console.log("form submitted", values)
        }
    })
    return (
        <>

            <Typography variant='h3' mt={7} mb={2} textAlign={'center'} fontFamily={"Dancing Script"} color={'#855E42'}>We'd Love to Hear from You!</Typography>
            <Box component="form"
                onSubmit={formik.handleSubmit}>
                <TextField
                    label="First Name"
                    type="text"
                    variant="outlined"
                    sx={{ width: "600px", m: 3 }}
                    name="firstName"
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <TextField
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    sx={{ width: "600px", m: 3 }}
                    name="lastName"
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <TextField
                    label="Phone Number"
                    type="number"
                    variant="outlined"
                    sx={{ width: "600px", m: 3 }}
                    name="phone"
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
                <TextField
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    sx={{ width: "600px", m: 3 }}
                    name="email"
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    label="Message"
                    type="text"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{ width: "1250px", m: "10px 20px" }}
                    name="message"
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    onBlur={formik.handleBlur}
                />
                <Button size="large" variant="contained" type="sumbit" sx={{ margin: '10px 40px', padding: '10px 50px', borderRadius: '50px' }} endIcon={<SendIcon />}>Send</Button>
            </Box>
        </>
    )
}

export default Contact
