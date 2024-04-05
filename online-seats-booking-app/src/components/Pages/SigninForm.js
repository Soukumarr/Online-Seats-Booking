import React, { useState } from 'react';
import styles from './SigninForm.module.css';
import { Button, Dropdown } from 'antd';
 
export const SigninForm = () => {
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
    
    alert(JSON.stringify(form,null,2));
   


}

  
return(
    <div>
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


