import React,{useState} from "react";
import styles from './SigninForm.module.css';
import Navigationbar from "./Navigationbar";
const Resetpassword=()=>
{
    const [form,setForm] = useState(
        {
            currentpassword:"",
            newpassword:"",
            confirmpassword:"",
            
            
        }
        );
        const validatePassword = (newpassword) => {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            return passwordRegex.test(newpassword);
          };

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
        const passwordValid = validatePassword(form.newpassword);
        if (!passwordValid) {
            alert('Password must be at least 8 characters long and contain at least one lowercase letter, uppercase letter, number, and special character.');
            return;
          }
      
          if (form.newpassword !== form.confirmpassword) {
            alert('Passwords do not match');
            return;
          }
        alert(JSON.stringify(form,null,2))
    } 

      
    return(
        <div className={styles.userprofile}>
          <header className={styles.header}>
            <br></br>
            <h1>My Profile</h1>
            
          </header>
          
          <Navigationbar/>
          
        <form className={styles.resetform} onSubmit={onSubmitForm}>
        <div className={styles.heading}><h2>Reset Password</h2></div>
            
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