import React, { useState } from 'react';
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { phone, name, email, desc }
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        console.log(data)
        alert("Thanks for contacting us")
        setName("")
        setEmail("")
        setPhone("")
        setDesc("")
      })
      .catch(err => console.log(err))
  }
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value)
    }
    else if (e.target.name === "email") {
      setEmail(e.target.value)
    }
    else if (e.target.name === "phone") {
      setPhone(e.target.value)
    }
    else {
      setDesc(e.target.value)
    }
  }
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [desc, setDesc] = useState("")
  return <div className={styles.container}>
    <h1>
      Contact Us
    </h1>
    <form onSubmit={handleSubmit}>
      <div className={styles.mb3}>
        <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
        <input className={styles.input} value={name} onChange={handleChange} type="text" id="name" name='name' aria-describedby="emailHelp" />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="email" className={styles.formlabel}>Email address</label>
        <input className={styles.input} value={email} onChange={handleChange} type="email" id="email" name='email' aria-describedby="emailHelp" />
        <div id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</div>
      </div>
      <div className={styles.mb3}>
        <label htmlFor="phone" className={styles.formlabel}>Password</label>
        <input required className={styles.input} value={phone} onChange={handleChange} type="phone" id="phone" name='phone' />
      </div>
      <div className={styles.mb3}>
        <label className={styles.formlabel} htmlFor="desc">Elaborate your concern</label>
        <textarea className={styles.input} onChange={handleChange} name='desc' value={desc}  id="desc" />
      </div>
      <button className={styles.btn} type="submit">Submit</button>
    </form>
  </div>;
};

export default Contact;
