import { useState } from "react";
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { ADD_USER } from "../utils/mutations";
import * as Auth from '../utils/auth';
import "../styles/Pages.css"

import Nav from "../components/Nav";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
}


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, {error}] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(JSON.stringify(formState))
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="logUpContain container my-1">
      <div className="signUp">
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>

      <div className="flex-row space-between my-2">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="Username"
            name="username"
            type="username"
            id="username"

            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          </div>
          <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>

      <div className="logIn">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
        <label htmlFor="email">Email:</label>
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="password">Password:</label>
          <input 
            placeholder="********"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>

            <p className="error-text">Incorrect Credentials</p>

          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;