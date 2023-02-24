import React from 'react';
import '../../App.css';
import '../pages/SIgnUp.css'
import Navbar from '../Navbar';
// import Form from '../Form';
import Footer from '../Footer';
// import SignUpDB from '../../database/signupdb';
import LoginDB from '../../database/logindb';


export default function SignUp() {
  return (
    <>
      <Navbar />
      <LoginDB/>
      <Footer />
    </>
  )
}
