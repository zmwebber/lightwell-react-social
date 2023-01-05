import React from "react";
import NavBar from "../../components/NavbarComponent/NavBar";
import UserRegistrationForm from "../../components/LoginComponent/UserRegistrationForm"
import "./registrationPageStyle.css";

function RegistrationPage() {
	return (
		<div className="home-page">
			<div id="left" className="navbar-position">
				<NavBar />
			</div>

			<div className="center">			

				<div id="center">
					<UserRegistrationForm />
				</div>
			</div>
		</div>
	);
}

export default RegistrationPage;
