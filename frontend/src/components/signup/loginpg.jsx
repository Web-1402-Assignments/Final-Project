import "./welcome.css"
import "./login.css";
import { useState, useMemo, useEffect } from "react";



import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate,Link } from "react-router-dom";
export const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
  	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		fetch('http://localhost:5000/login', {
			method: 'POST',
			body: JSON.stringify({
			  email, password
			}),
			headers: {
			  'Content-type': 'application/json; charset=UTF-8',
			},
		  })
			 .then((response) => response.json())
			 .then((data) => {
				if (data.status == "failed") {
					// alert(data.message)
					setMsg(data.message)
				}
				else {
					// alert("Login Successful, Welcome!!");
					navigate("/goals");
				}
			 })
			 .catch((err) => {
				console.log(err.message);
			 });
	  };
	  
	
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	
	return (
		<div>
	        	
			<div className="nav_container">
				<div className="nav">
					<div className="btn1">
					<Link to={"/"}>	<button className="myfit">FitnessTracker</button></Link>
					</div>
				</div>
			</div>
			<div className="bottom_nav_div12">
				<div className="form_container">
					<div className="form_container_bottom_div">
                        
						<form onSubmit={handleSubmit} className="createform">
                        <p className="form_heading">Member Login Page</p>
                            <div className="input_div1">
								<input className="form_input" type="email" placeholder=" Email address" value={email} onChange={handleEmailChange}/>
								<input className="form_input" type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange}/>
								<p className="input_bottom_text">Must be at least 10 characters, no spaces.</p>
								<p className="input_bottom_text" style={{color: "red", textAlign:"center"}}>{msg}</p>
                            </div>
                            <div className="btn_div1"> 
                            <p className="input_bottom_text1">By signing up for Fitness Tracker, you are agreeing to our <a>Privacy Policy</a> and <a>Terms.</a></p>
                                <button type="submit" className="continue_btn">Continue</button>
                                </div>

                        </form>
								
					</div>
				</div>
			</div>
		</div>
	);
};