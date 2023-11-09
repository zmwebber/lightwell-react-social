import React from "react";
import NavBar from "../../components/NavbarComponent/NavBar";
import UserRegistrationForm from "../../components/LoginComponent/UserRegistrationForm"
import RegistrationPageStyle from "./registrationPageStyle.module.scss";

function RegistrationPage() {
	return (
		<div className={RegistrationPageStyle.registrationPageContainer}>
			<div className={RegistrationPageStyle.navbarPosition}>
				<NavBar userTheme={"light"} screenName=""/>
			</div>

			<div className={RegistrationPageStyle.registrationPageContent}>
				<UserRegistrationForm />
			</div>
		</div>
	);
}

export default RegistrationPage;
