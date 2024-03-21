import React, { useState } from "react";
import styles from "./SigninForm.css";
const SigninForm = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    let errors = {};
    if (!form.email) {
      errors.email = "Email is required!!!";
      alert(errors.email);
    } else if (!form.password) {
      errors.password = "Password is required!!!";
      alert(errors.password);
    } else if (!form.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required!!!";
      alert(errors.confirmPassword);
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert(JSON.stringify(form, null, 2));
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Email</label>
        <input
          className={styles.formField}
          type="text"
          aria-label="Email field"
          name="email"
          value={form.email}
          onChange={onUpdateField}
          placeholder="Enter your email address"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Password</label>
        <input
          className={styles.formField}
          type="password"
          aria-label="Password field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
          placeholder="********"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Confirm Password</label>
        <input
          className={styles.formField}
          type="password"
          aria-label="Confirm password field"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onUpdateField}
          placeholder="********"
        />
      </div>
      <div className={styles.formActions}>
        <button className={styles.formSubmitBtn} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
