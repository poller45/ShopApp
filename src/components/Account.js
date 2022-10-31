import db from "../db";
import { useState } from "react";
import { login } from "../features/account/accountSlice";
import { useDispatch } from "react-redux";
// import { redirect } from "react-router-dom";

export default function Account() {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	// const [showWrongUser, setShowWrongUser] = useState(false);
	const dispatch = useDispatch();
	const handelSubmit = (event) => {
		event.preventDefault();
		const isUserExist = db.usersDb.find((el) => el.email === userEmail);
		if (isUserExist) {
			if (isUserExist.password === userPassword) {
				dispatch(login(isUserExist));
				//window.location.href = "/favourites";

				// console.log("eeeee");
				// console.log(isUserExist);
			}
			// setShowWrongUser(true);
			// } else {
			// 	setShowWrongUser(false);
		}
		console.log(isUserExist);

		console.log(db.usersDb);
		console.log(userEmail);
		console.log(userPassword);
		console.log("!!!!!!!");
	};
	return (
		<div className="columns">
			<form className="userForm" onSubmit={handelSubmit}>
				<h2 className="title">Secure Sign In</h2>
				<p className="desription">For current customers</p>

				<div className="error">Invalid email address or password.</div>

				<label>
					<input
						type="email"
						placeholder="Email Address"
						data-name="email"
						value={userEmail}
						onChange={(event) => setUserEmail(event.target.value)}
						required
					/>
				</label>

				<label>
					<input
						type="password"
						placeholder="Password"
						data-name="password"
						value={userPassword}
						onChange={(event) => setUserPassword(event.target.value)}
						required
					/>
				</label>

				<button className="btn">Sign in</button>
			</form>

			{/* <form id="RegistrationForm" className="userForm">
				<h2 className="title">Quick Registration</h2>
				<p className="desription">For new customers</p>

				<div className="error">Invalid email address or password.</div>

				<label>
					<input
						type="text"
						placeholder="Full name"
						data-name="name"
						value="Ivan"
						required
					/>
				</label>
				 {!showWrongUser && (
					<div style={{ color: "red", marginBottom: "10px" }}>
						Wrong User Email
					</div>
				)} 
				<label>
					<input
						type="email"
						placeholder="Email Address"
						data-name="email"
						value="ivan@gmail.com"
						required
					/>
				</label>

				<label>
					<input
						type="password"
						placeholder="Password"
						data-name="password"
						value="123"
						required
					/>
				</label>

				<label>
					<input
						type="password"
						placeholder="Verify Password"
						data-name="passwordVerify"
						value="123"
						required
					/>
				</label>

				<button className="btn">Create Account</button>
			</form> */}
		</div>
	);
}
