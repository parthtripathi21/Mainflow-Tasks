// src/components/Signup.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './styles.css';

const Signup = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('/api/signup', values);
      console.log('Signup successful:', response.data);
      resetForm(); // Reset the form after successful signup
    } catch (error) {
      console.error('Signup failed:', error.response.data);
    } finally {
      setSubmitting(false); // Set submitting to false after submission is done
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing up...' : 'Signup'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
