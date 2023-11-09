import React from "react";
import NavBar from "../../components/NavbarComponent/NavBar";
import Notifications from "../../components/NotificationComponent/NotificationComponent";
import { store } from "../../app/store";

export function NotificationPage() {
	return (
		<div>
			<Notifications />
		</div>
	);
}
