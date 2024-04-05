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

  

  

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };

    
    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    

    let passwordValid = false;
    let passwordErrorMessage = "";

    if (form.password.length < 8) {
      passwordValid = false;
      passwordErrorMessage = "Password must be at least 8 characters long,must contain at least one number, one lowercase letter, and one uppercase letter.";
    } else {
      const hasNumber = /\d/.test(form.password);
      const hasLowercase = /[a-z]/.test(form.password);
      const hasUppercase = /[A-Z]/.test(form.password);

      if (!hasNumber || !hasLowercase || !hasUppercase) {
        passwordValid = false;
        passwordErrorMessage =
          "Password must contain at least one number, one lowercase letter, and one uppercase letter.";
      } else if (form.password !== form.confirmPassword) {
        passwordValid = false;
        passwordErrorMessage = "Passwords do not match.";
      } else {
        passwordValid = true;
      }
    }

    if (!passwordValid) { 
      alert(passwordErrorMessage); 
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
                <label className={styles.formLabel}><h2>Email:</h2> </label>
                <input type="email"
                name="email"
                onChange={onUpdateField}
                className={styles.formInput}
                placeholder="Enter your email" required />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h2>Name:</h2> </label>
                <input type="text"
                name="name"
                onChange={onUpdateField}
                className={styles.formInput}
                placeholder="Enter your name" required />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h2>Role:</h2> </label>
                    <select name="role" className={styles.formDropdown} onChange={onUpdateField} required>
                        <option value="admin"required>Admin</option>
                        <option value="user">User</option>
                    </select>
            </div>
 
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h2>Password:</h2> </label>
                <input type="password"
                name="password"
                value={form.password}
                onChange={onUpdateField}
                className={styles.formField} 
                placeholder="Password" required/>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h2>Confirm Password:</h2> </label>
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
