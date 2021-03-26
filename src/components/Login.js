import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router'
import axios from "axios";

const initialFormValues = {
  username: "Lambda School",
  password: "i<3Lambda4"
}

const Login = () => {
  const {push} = useHistory()
  const [formValues, setFormValues] = useState
    (initialFormValues)

  // useEffect(() => {
    
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/login`)
      .then(res => {
        console.log(res.data)
        window.localStorage.setItem("token", res.data)
        push('/bubbles')
      })
  }

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <form onSubmit={handleSubmit}>
          <label>
            username
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formValues.username}
            />
          </label>

          <label>
            password
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formValues.password}
            />
          </label>

          <button type="submit">
            Login
          </button>
        </form>
      </h1>
    </>
  );
};

export default Login;

//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.