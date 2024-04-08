import React from "react";
import styles from './SigninForm.module.css';
import { Link } from "react-router-dom";
function Actions(){

    //const [isRowSelected, setIsRowSelected] = useState(false);
    const handleCancelRequest = () => {
        const confirmCancel = window.confirm("Are you sure you want to cancel the request?");
    
        // if (confirmCancel) {
        //   
        //  alert("Request cancelled"); 
        
        //   
        // } else {
        //   console.log("Cancel request dismissed"); 
        // }
      };

    return(
        <div >
          <table>
            <tbody><tr>
            <td>
                <button className={styles.linkbutton}> 
                    <Link to ="/seatswap">Request seat swap</Link>   </button></td>
                   
                    <td> <button className={styles.linkbutton} onClick={handleCancelRequest}>Cancel Request</button> </td>
                    </tr>
                    </tbody>
                    </table>
                    
                  </div>  
                
    );
}
export default Actions;