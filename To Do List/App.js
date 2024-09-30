import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.body.classList.add('body-background');
    return () => {
      document.body.classList.remove('body-background');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user registration data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // For demo purposes, hardcoding a check
    if (1===1) {
      alert('Login successful');
      // Redirect to navigation.html
      window.location.href = `${process.env.PUBLIC_URL}/navigation.html`;
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="box pt-5 p-4 border rounded">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
                <a href="register.html" className="btn btn-link mt-2">
                  Register
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;