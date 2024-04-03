import React,{useState} from "react";
import styles from './LoginForm.module.css';
import { Button, Dropdown } from 'antd';
const LoginForm=()=>
{
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
        const passwordValid= validatePassword(form.password);
        const confirmPasswordValid=validatePassword(form.password);
        if(!passwordValid){
          alert('Password must be at least 8 characters long and contain at least one special character');
          return;
        }
        
        alert(JSON.stringify(form,null,2))
    }

    const validatePassword=(password)=> {
      const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
    }

    
    const handleGoogleLogin = () => {
        window.location.href = "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ddm=0&ec=GAlAwAE&flowEntry=AddSession&flowName=GlifWebSignIn&hl=en&service=accountsettings&theme=mn&dsh=S346832%3A1711285674106523";
      };
 
      

      
    return(
        <div>
        <form className={styles.loginform} onSubmit={onSubmitForm}>
            <h2>Login</h2>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Email:</h3> </label>
                <input type="email"
                name="email"
                onChange={onUpdateField}
                className={styles.formInput}
                placeholder="Enter your email" required/>
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
                <label className={styles.formLabel}><h3>Role:</h3> </label>
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
 
export default LoginForm;