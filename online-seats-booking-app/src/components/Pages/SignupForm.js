import React, { useState } from "react";
import styles from "./SigninForm.module.css";

const SignupForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name:"",
    confirmPassword: "",
    role: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };

    
    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const emailValid = validateEmail(form.email);
    const passwordValid = validatePassword(form.password);

    if (!emailValid) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!passwordValid) {
      alert('Password must be at least 8 characters long and contain at least one lowercase letter, uppercase letter, number, and special character.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

        alert(JSON.stringify(form,null,2))
    }

   

    // const handleGoogleLogin = () => {
    //     window.location.href = "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ddm=0&ec=GAlAwAE&flowEntry=AddSession&flowName=GlifWebSignIn&hl=en&service=accountsettings&theme=mn&dsh=S346832%3A1711285674106523";
    //   };
 

      
    return(
        <div className={styles.signupcontainer}>
        <form className={styles.signupform} onSubmit={onSubmitForm}>
            
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Email:</h3> </label>
                <input type="email"
                name="email"
                onChange={onUpdateField}
                className={styles.formInput}
                placeholder="Enter your email" required />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Name:</h3> </label>
                <input type="text"
                name="name"
                onChange={onUpdateField}
                className={styles.formInput}
                placeholder="Enter your name" required />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Role:</h3> </label>
                    <select name="role" className={styles.formDropdown} onChange={onUpdateField} required>
                        <option value="admin"required>Admin</option>
                        <option value="user">User</option>
                    </select>
            </div>
 
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Password:</h3> </label>
                <input type="password"
                name="password"
                value={form.password}
                onChange={onUpdateField}
                className={styles.formField} 
                placeholder="Password" required/>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Confirm Password:</h3> </label>
                <input type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={onUpdateField}
                className={styles.formField} 
                placeholder="Confirm Password" required/>
            </div>
           
 
            <div className={styles.formActions}>
                <button className={styles.formSubmitBtn} type="submit">SignUp</button>
            </div>
            
            <p className={styles.signinlink}>
            Already have an account? <a href="/signin">Sign In</a>
          </p>
                
                {/* <p>--------------------Or--------------------</p>
                <div className="social-login">
         
          <button type="button" className={styles.formSubmitBtn} onClick={handleGoogleLogin}>
            <i className="fab fa-google"></i> Login with Google
          </button>
        </div> */}

        </form>
        </div>
    );
}

export default SignupForm;
