import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Formik, ErrorMessage} from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CareerDetailsComponent = ({careerID, title}) => {
    const history = useNavigate();
    const [resume, setResume] = useState();
    const initialValues = {
        title: {title},
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "",
        cover: ""
    }
    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const validationSchema = yup.object().shape({
        firstName: yup.string().required("This field is required"),
        lastName: yup.string().required("This field is required"),
        email: yup
            .string()
            .email("invalid email")
            .required("Email is required"),
        phone: yup
            .string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("Your contact phone is required"),
        experience: yup.string().required("This field is required"),
        cover: yup.string().required("Tell us something about your skills"),
    })

    const handleImageChange = (e) => { 
        setResume(e.target.files[0]);
    }

    const successNotification = () => toast.success("Application successfully received");
    const errorNotification = () => toast.error("Application cannot be submitted");

    const handleSubmit = (values) => {
        const formData = new FormData();
        formData.append('resume', resume);
        formData.append('careerID', careerID);
        formData.append('title', title);
        formData.append('firstName', values.firstName);
        formData.append('lastName', values.lastName);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('experience', values.experience);
        formData.append('cover', values.cover);

        console.log(...formData);
        axios.post(`${process.env.REACT_APP_API_URL}/careers/apply`, formData)
        .then(res => {
            if(res.status === 200) {
                console.log("Successfully published data")
                successNotification()
                setTimeout(()=>history("/careers"), 3000)
            } else {
                errorNotification()
            }
        })
        .catch(err => {
            console.log(err)
            errorNotification()
        })
    }

    return (
        <section className="contact-main">
            <Container>
                <p>Fill in your details to apply for this position</p>
                <Row className="contact-main-container">

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />

                <Formik
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {
                        ({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <div className="contact-bx">
                                    <Row>
                                        <Col sm={12}>
                                            <label htmlFor="title">Applying For</label>
                                            <input type="text" id="title" name="title" value={title}
                                                disabled style={{fontSize:'16px', fontWeight:'700'}} 
                                            />
                                        </Col>

                                        <Col sm={12} md={6}>
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text" id="firstName" name="firstName" value={values.firstName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Enter your first name" 
                                            />
                                            <ErrorMessage
                                                name="firstName"
                                                component="span"
                                                className="error"
                                            />
                                        </Col>

                                        <Col sm={12} md={6}>
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" id="lastName" name="lastName" value={values.lastName} 
                                                error={!!touched.lastName && !!errors.lastName}
                                                helpertext={touched.lastName && errors.lastName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Enter your first name" 
                                            />
                                            <ErrorMessage
                                                name="lastName"
                                                component="span"
                                                className="error"
                                            />
                                        </Col>

                                        <Col sm={12} md={6}>
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" name="email" value={values.email} 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Enter your email" 
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="span"
                                                className="error"
                                            />
                                        </Col>

                                        <Col sm={12} md={6}>
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="tel" id="phone" name="phone" value={values.phone} 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Enter your phone number" 
                                            />
                                            <ErrorMessage
                                                name="phone"
                                                component="span"
                                                className="error"
                                            />
                                        </Col>

                                        <Col sm={12} md={6}>
                                            <label htmlFor="experience" >Years of Experience</label>
                                            <select name="experience" id="experience" value={values.experience} 
                                                error={!!touched.experience && !!errors.experience}
                                                helpertext={touched.experience && errors.experience}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                            >
                                                <option value="">Select your years of experince</option>
                                                <option value="1 year">1 year</option>
                                                <option value="2 years">2 years</option>
                                                <option value="3 years">3 years</option>
                                                <option value="4 years">4 years</option>
                                                <option value="5 years">5 years</option>
                                                <option value="6 - 10 years">6 - 10 years</option>
                                                <option value="Over 10 years">Over 10 years</option>
                                            </select>
                                        </Col>

                                        <Col sm={12} md={6}>
                                            <label htmlFor="resume">Attach your Resume</label>
                                            <input type="file" id="resume" name="resume" onChange={handleImageChange} required />
                                        </Col>

                                        <Col sm={12}>
                                            <label htmlFor="cover" className="message">Cover Letter</label>
                                            <textarea id="cover" name="cover" cols="30" rows="8" value={values.cover}
                                                onChange={handleChange}
                                                onBlur={handleBlur} >
                                            </textarea>
                                            <ErrorMessage
                                                name="cover"
                                                component="span"
                                                className="error"
                                            />
                                        </Col>

                                    </Row>
                                    
                                    <div className="br"/>
                                    <button type="submit">Submit Data</button>
                                </div>
                            </form>
                        )
                    }
                </Formik>
                </Row>
            </Container>
        </section>
    );
}
 
export default CareerDetailsComponent;