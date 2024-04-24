import React,{useState} from "react";
import styles from './SigninForm.module.css';
import SwapService from "../util/SwapService";


const Seatswapform=()=>
{
    const [form,setForm] = useState(
        {
            bookseatid:"",
            swapseatid:"",
            
            
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
        
        
        // alert(JSON.stringify(form,null,2))
        const confirmSwap = window.confirm(
            "Are you sure you want to swap seats?"
          );
      
          if (confirmSwap) {
            // Submit form data to backend or perform other actions (replace with your logic)
            SwapService.swapRequest(form).then(
                (response)=>{
                    console.log(response.data)
                    if(response.data.id!= null){
                    alert("Swap Request Generated" + JSON.stringify(form, null, 2)); // For demonstration purposes
                    }else{
                        alert("Seat Swap Successfull!")
                    }
                }
            ).catch((e)=>console.log(e));
          } else {
            console.log("Seat swap cancelled"); // Optional logging
          }
    } 

      
    return(
        
        <form className={styles.swapseatform} onSubmit={onSubmitForm}>
            <h1>Seat Swap</h1>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Book Seat Id:</h3> </label>
                <input type="text"
                name="bookseatid"
                onChange={onUpdateField}
                className={styles.formInput}
                placeholder="Enter your booked seat id" required/>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Swap Seat Id:</h3> </label>
                <input type="text"
                name="swapseatid"
                onChange={onUpdateField}
                className={styles.formInput}
                placeholder="Enter your swap seat id" required/>
            </div>
 
            <div className={styles.formActions}>
                <button className={styles.formSubmitBtn} type="submit">Send Request</button>
            </div>
        </form>
    );
}
 
export default Seatswapform;