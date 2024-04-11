import React,{useState} from "react";
import styles from './SigninForm.module.css';
import Navigationbar from "./Navigationbar";
import axios from "axios";

const Resetpassword=()=>
{
  const user = JSON.parse(localStorage.getItem("user"));
    const [form,setForm] = useState(
        {
            currentpassword:"",
            newpassword:"",
            confirmpassword:"",
            
            
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

    if (form.newpassword.length < 8) {
      hasError = true;
      errorMessage = "Password must be at least 8 characters long, must contain at least one number, one lowercase letter, and one uppercase letter.";
    } else {
      const hasNumber = /\d/.test(form.newpassword);
      const hasLowercase = /[a-z]/.test(form.newpassword);
      const hasUppercase = /[A-Z]/.test(form.newpassword);

      if (!hasNumber || !hasLowercase || !hasUppercase) {
        hasError = true;
        errorMessage =
          "Password must contain at least one number, one lowercase letter, and one uppercase letter.";
      } else if (form.newpassword !== form.confirmpassword) {
        hasError = true;
        errorMessage = "New password and confirm password don't match.";
      }
    }

    if (hasError) {
      alert(errorMessage);
      return; // Prevent form submission if invalid
    }
        
        // alert(JSON.stringify(form,null,2))
        if (user) {
          const email = user.email;

          // Create reset password request
          const resetPasswordRequest = {
            email: email,
            newPassword: form.confirmpassword, // Replace with the actual new password
          };

          // Send reset password request
          axios
            .post(
              "http://localhost:8080/users/resetpassword",
              resetPasswordRequest
            )
            .then((response) => {
              // Handle successful password reset
              // ...
            })
            .catch((error) => {
              // Handle error
              // ...
            });
        }

    } 

      
    return(
        <div className={styles.userprofile}>
          <header className={styles.header}>
            <br></br>
            <h1>Reset Password</h1>
            
          </header>
          
          <Navigationbar/>
          
        <form className={styles.resetform} onSubmit={onSubmitForm}>
        
            
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Current Password</h3> </label>
                <input type="password"
                name="currentpassword"
                onChange={onUpdateField}
                className={styles.formField}
                placeholder="Current password" required/>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>New Password</h3> </label>
                <input type="password"
                name="newpassword"
                value={form.password}
                onChange={onUpdateField}
                className={styles.formField} 
                placeholder="Password" required/>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Confirm Password</h3> </label>
                <input type="password"
                name="confirmpassword"
                value={form.confirmPassword}
                onChange={onUpdateField}
                className={styles.formField} 
                placeholder="Confirm Password" required/>
            </div>
 
            <div className={styles.formActions}>
                <button className={styles.resetformBtn} type="submit">Send Request</button>
            </div>
        </form>
        </div>
    );
}
 
export default Resetpassword;