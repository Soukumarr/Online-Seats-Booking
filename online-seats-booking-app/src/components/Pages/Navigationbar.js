import React from "react";
import styles from './SigninForm.module.css';
import { Link } from "react-router-dom";
function Navigationbar(){
    return(
        <div className={styles.navheading}>
          <table>
            <tbody><tr>
            <td>
                    <Link to ="/userprofile">Edit Profile</Link> </td>
                    
                    <td> <Link to="/resetpassword">Reset Password</Link> </td>
                   
                    <td>  <Link to="/bookings">My Bookings</Link> </td>
                    </tr>
                    </tbody>
                    </table>
                  </div>  
                
    );
}
export default Navigationbar;