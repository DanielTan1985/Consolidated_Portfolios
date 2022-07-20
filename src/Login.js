import React from 'react';
import './index.css';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './context/AuthProvider';

import axios from './api/axios';
const LOGIN_URL = '/login/signin';

const Login = () => {
	const { setAuth } = useContext(AuthContext);
	const usernameRef = useRef();
	const errRef = useRef();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		usernameRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [username, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ username, password }),
				{
					headers: { 'Content-Type': 'application/json' },
					// withCredentials: true,
				}
			);

			const accessToken = response?.data?.accessToken;
			const roles = response?.data?.roles;
			setAuth({ username, password, roles, accessToken });
			setUsername('');
			setPassword('');
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Username or Password');
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login Failed');
			}
			errRef.current.focus();
		}
	};

	return (
		<div className='MainLogin-Container'>
			{success ? (
				<section>
					<h1>You are logged in!</h1>
					<br />
					<p>{/* <a href="#">Go to Home</a> */}</p>
				</section>
			) : (
				<section className="Login-Container">
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<h1>Login</h1>
					<form id='login-form' onSubmit={handleSubmit}>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							ref={usernameRef}
							autoComplete="off"
							onChange={(e) => setUsername(e.target.value)}
							value={username}
							required
						/>

						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
						/>
						<button className="btn-Login">Sign In</button>
					</form>
					<p>
						Need an Account?
						<br />
						<span className="line">
							<a href="/Register">Sign Up</a>
						</span>
					</p>
				</section>
			)}
		</div>
	);
};

export default Login;