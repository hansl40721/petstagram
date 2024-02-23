import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup(props) {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  const handleFormSubmit = async (event) => {
    try {
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
  } catch (err) {
    console.error(err)
    alert(err)
  }}

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="logUpContain container my-1">
      <div className="splashText">
        <h1>Welcome to Petstagram!</h1>
        <h2>The place to share your pet photos with other pet lovers</h2>
      </div>

      <Link to="/">← Go to Login</Link>
      <div className="logForm">

      <div className="signUp">
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="DisapprovingChinchilla42"
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Chinchillin@gmail.com"
            name="email"
            type="text"
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
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Signup;