import {React, useState} from "react";
import styles from './SigninForm.module.css';
//import Navbar from "./Navbar";
import Navigationbar from "./Navigationbar";


const Userprofile=()=>

  {
    const [form,setForm] = useState(
        {
            firstname:"",
            lastName:"",
            email:"",
            phone:"",
            address:"",
            
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
        if (!validatePhoneNumber(form.phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
          }
        
        alert(JSON.stringify(form,null,2))
    }

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10}$/; // Matches exactly 10 digits
        return phoneRegex.test(phone);
      };
    

    const validatePassword=(password)=> {
      const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
    }

    
    

    return (
         <div className={styles.userprofile}>
          <header className={styles.header}>
            <br></br>
            <h1>My Profile</h1>
            
          </header>
          
          <Navigationbar/>

          <form className={styles.profileform} onSubmit={onSubmitForm}>
           <div className={styles.userform}>
            <div className={styles.userheading}><h2> User Info</h2></div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>First Name:</h3> </label>
                <input type="text"
                name="firstname"
                onChange={onUpdateField}
                className={styles.formInputs}
                placeholder="First Name" required/>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Last Name:</h3> </label>
                <input type="text"
                name="lastname"
                onChange={onUpdateField}
                className={styles.formInputs}
                placeholder="Last Name" required/>
            </div>
            </div>

            <div className={styles.contactform}>
            <div className={styles.userheading}><h3> Contact Info</h3></div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Email:</h3> </label>
                <input type="email"
                name="email"
                onChange={onUpdateField}
                className={styles.formInputs}
                placeholder="Enter your email" required/>
            </div>

            {/* <div className={styles.formGroups}>
                <label className={styles.formLabel}><h3>Mobile Number:</h3> </label>
                <input type="integer"
                name="number"
                onChange={onUpdateField}
                className={styles.formInputs}
                placeholder="Mobile Number" required/>
            </div> */}
             <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Phone Number:</h3> </label>
                <input type="integer"
                name="phone"
                onChange={onUpdateField}
                className={styles.formInputs}
                placeholder="Contact Number" required/>
                 
          
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Address:</h3> </label>
                <input type="text"
                name="address"
                onChange={onUpdateField}
                className={styles.formInputs}
                placeholder="Address" required/>
            </div>
 
            <div className={styles.formActions}>
                <button className={styles.formBtn} type="submit">Save Changes</button>
            </div>
            
            </div>
        </form>

      
          
         </div>
      );
}
export default Userprofile;