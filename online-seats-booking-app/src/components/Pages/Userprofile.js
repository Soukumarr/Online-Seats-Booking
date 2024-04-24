import { React, useState, useEffect } from "react";
import styles from "./SigninForm.module.css";
//import Navbar from "./Navbar";
import Navigationbar from "./Navigationbar";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Userprofile = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    axios
      .get("http://localhost:8080/auth/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setForm(response.data); // Update user state with user's information
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (form.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return; // Prevent form submission if invalid
    }

    //alert(JSON.stringify(form, null, 2))

    const token = localStorage.getItem("jwtToken");
    console.log(token);
    axios
      .put("http://localhost:8080/auth/user/editProfile", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Profile Updated successfully!");
        if (response.status === 200) {
          console.log("Profile Updated successful");
        } else {
          console.log("Profile Updated failed");
        }
      })
      .catch((error) => {
        if (error.message === "Network Error") {
          console.log("Unable to connect to server");
        } else {
          console.log(error.message);
        }
      });
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className={styles.userprofile}>
      <header className={styles.header}>
        <br></br>
        <h1>My Profile</h1>
      </header>
      <Navigationbar />
      <form className={styles.profileform} onSubmit={onSubmitForm}>
        <div className={styles.userform}>
          <div className={styles.userheading}>
            <h3 className={styles.divtitle}> User Information</h3>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              <h2>Name</h2>{" "}
            </label>
            <input
              type="text"
              name="name"
              onChange={onUpdateField}
              className={styles.formInputs}
              value={form.name}
              placeholder="Enter your name"
              required
            />
          </div>
        </div>

        <div className={styles.contactform}>
          <div className={styles.userheading}>
            <h3 className={styles.divtitle}> Contact Information</h3>
          </div>

          {/* <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                            <h2>Email:</h2>{" "}
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={onUpdateField}
                            className={styles.formInputs}
                            placeholder="Enter your email"
                            required
                        />
                    </div> */}

          {/* <div className={styles.formGroups}>
                                    <label className={styles.formLabel}><h3>Mobile Number:</h3> </label>
                                    <input type="integer"
                                    name="number"
                                    onChange={onUpdateField}
                                    className={styles.formInputs}
                                    placeholder="Mobile Number" required/>
                            </div> */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              <h2>Phone Number:</h2>{" "}
            </label>
            <input
              type="integer"
              name="phone"
              onChange={onUpdateField}
              value={form.phone}
              className={styles.formInputs}
              placeholder="Ex: 7008389689"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              <h2>Address:</h2>{" "}
            </label>
            <input
              type="text"
              name="address"
              onChange={onUpdateField}
              value={form.address}
              className={styles.formInputs}
              placeholder="Enter Your Address"
              required
            />
          </div>

          <div className={styles.formActions}>
            <button className={styles.formBtn} type="submit">
              Save Changes
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
      <div className={styles.clearFooter}></div>{" "}
      {/* Add this div to clear the float */}
    </div>
  );
};
export default Userprofile;
