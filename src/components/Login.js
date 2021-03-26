import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router'
import axios from "axios";

const initialFormValues = {
  username: "Lambda School",
  password: "i<3Lambd4"
}

const Login = () => {
  const {push} = useHistory()
  const [formValues, setFormValues] = useState
    (initialFormValues)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/login`, formValues)
      .then(res => {
        console.log(res.data)
        localStorage.setItem("token", res.data.payload)
        push('/bubbles')
      })
      .catch(err => {
        console.log(err)
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

          <button>
            Login
          </button>
        </form>
      </h1>
    </>
  );
};

export default Login;

//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.