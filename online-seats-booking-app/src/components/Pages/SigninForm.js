import React, { useState } from 'react';
import styles from './SigninForm.module.css';
import { Button, Dropdown } from 'antd';
import axios from "axios";
import { useNavigate } from "react-router-dom";; 
 
export const SigninForm = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [form,setForm] = useState(
    {
        email:"",
        password:"",
        role:"",
        
    }
    );
const onUpdateField=e=>
{
    const nextFormState={
        ...form,
        [e.target.name]:e.target.value
    }
    setForm(nextFormState)
}

const onSubmitForm=e=>
{
    e.preventDefault();

    

    let hasError = false;
    let errorMessage = "";

    if (form.password.length < 8) {
      hasError = true;
      errorMessage = "Password must be at least 8 characters long, must contain at least one number, one lowercase letter, and one uppercase letter.";
    } else {
      const hasNumber = /\d/.test(form.password);
      const hasLowercase = /[a-z]/.test(form.password);
      const hasUppercase = /[A-Z]/.test(form.password);

      if (!hasNumber || !hasLowercase || !hasUppercase) {
        hasError = true;
        errorMessage =
          "Password must contain at least one number, one lowercase letter, and one uppercase letter.";
      } 
    }

    if (hasError) {
      alert(errorMessage);
      return; 
    }
    
    // alert(JSON.stringify(form,null,2));
    axios
      .post("http://localhost:8080/users/signin", form)
      .then((response) => {
        console.log(response.data);
        //localStorage.setItem("email", form.email);
        localStorage.setItem("user", JSON.stringify(response.data));

        // Here you can handle the response, for example save the user data or a JWT in the state or in local storage
        navigate("/layout");
      })
      .catch((error) => {
         if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            alert(error.response.data); // Here is where you will see the error message from the server
            console.error("There was an error!", error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }});
   


}

  
return(
    <div>
      <h1>Sign In</h1>
    <form className={styles.loginform} onSubmit={onSubmitForm}>
       
       
        <div className={styles.formGroup}>
            <label className={styles.formLabel}><h2>Email</h2> </label>
            <input type="email"
            name="email"
            onChange={onUpdateField}
            className={styles.formInput}
            placeholder="Enter your email" required/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.formLabel}><h2>Password</h2> </label>
            <input type="password"
            name="password"
            value={form.password}
            onChange={onUpdateField}
            className={styles.formField} 
            placeholder="Password" required/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.formLabel}><h2>Role</h2> </label>
                <select name="role" className={styles.formDropdown} onChange={onUpdateField} required >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
        </div>
       

        <div className={styles.formActions}>
            <button className={styles.formSubmitBtn} type="submit">Login</button>
        </div>
        <p className={styles.forgotpassword}>
                Forgot <a href="#">password?</a>
            </p>

            <p className={styles.signinlink}>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
            {/* <p>--------------------Or--------------------</p>
            <div >
               <button type="button" className={styles.formSubmitBtn} onClick={handleGoogleLogin}>
        <i className="fab fa-google"></i> Login with Google
      </button>
    </div> */}
    </form>
    </div>
);
}


