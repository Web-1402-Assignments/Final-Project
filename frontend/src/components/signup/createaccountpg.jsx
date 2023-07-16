import "./createaccount.css";
import "./welcome.css"
import "./createusernamepg.jsx";
import "./loginpg.jsx";
import { Link,Routes,Route } from "react-router-dom";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
export const CreateAccount = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
  	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		fetch('http://localhost:5000/register', {
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
					setMsg(data.message)
				}
				else {
					// alert("Sign Up Successful, Welcome!!");
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
						<button className="myfit">FitnessTracker</button>
					</div>
				</div>
			</div>
			<div className="bottom_nav_div_l2">
				<div className="form_container_b1">
					<div className="form_container_bottom_div_b1">
                        
						<form onSubmit={handleSubmit} className="createform_c1">
                        <p className="form_heading_c1">Almost there! Create your account</p>
                            <div className="input_div1_c1">
                            <input className="form_input_c1" type="email" placeholder=" Email address" onChange={handleEmailChange} value={email}/>
                            <input className="form_input_c1" type="password" placeholder="create a password" onChange={handlePasswordChange} value={password}/>
                            <p className="input_bottom_text_c1">Must be at least 10 characters, no spaces.</p>
                            <p className="input_bottom_text" style={{color: "red", textAlign:"center"}}>{msg}</p>
							</div>
                            <div className="btn_div1_c1"> 
                            <p className="input_bottom_text1_c1">By signing up for Fitness Tracker, you are agreeing to our <a href="#">Privacy Policy</a> and <a href="#">Terms.</a></p>
							<div className="btn_div1_bottom_c1" >
							<button type="submit" className="continue_btn">Continue</button>
							<p style={{textAlign:"center",}}>OR</p>
						         <Link className="continue_btn_c1" style={{textDecoration:"none"}} to="/signup/login">Google</Link>
                                {/* <button className="continue_btn_c1">Continue</button>
								             <p style={{textAlign:"center",}}>OR</p>
								<button className="continue_btn_c1">Google</button> */}
                                </div>
								</div>
                             
                        </form>
								
					</div>
				</div>
			</div>
		</div>
	);
};