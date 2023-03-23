import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { myTweets } from "../../redux/ducks/post_duck/tweetFormSlice";
import { useStore } from "react-redux";
import { Profile } from "../../models/ProfileModel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { addUser } from "../../api/UserApi";
import { useAppSelector } from "../../app/hooks/hooks";
import type { } from "redux-thunk/extend-redux";
import dayjs, { Dayjs } from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import UserRegistrationFormStyle from "./userRegistrationFormStyle.module.scss";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
function UserRegistrationForm(props: any) {
	const store = useStore();
	const feed = useAppSelector(myTweets);

	const [name, setName] = useState("");
	const [handle, setHandle] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [birthday, setBirthday] = React.useState<Dayjs | null>(
		dayjs("2014-08-18T21:11:54")
	);
	// const [tweetPicture, setTweetPicture] = useState("");
	const [profile, setProfile] = useState<Profile>({
		name: "",
		screen_name: "",
		email: "",
		password: "",
		dateOfBirth: new Date(),
		createdAt: new Date(),
		description: "",
		url: "",
		protected: false,
		followers_count: 0,
		friends_count: 0,
		listed_count: 0,
		favorites_count: 0,
		verified: false,
		statuses_count: 0,
		profile_background_color: "",
		profile_background_image_url: "",
		profile_image_url: "",
	});
	const profileSuccess = (e: any) => {
		e.preventDefault();
		if (birthday !== null) {
			profile.dateOfBirth = new Date(birthday.toString());
		}
		profile.name = name;
		profile.screen_name = handle;
		profile.email = email;
		profile.password = password;

		const action = addUser(profile);

		store
			.dispatch(action)
			.unwrap()
			.catch((error: any) => {
				console.log(error);
			});
		e.target.reset();

		if (props.className == "modal") {
			props.handleClose();
		}
	};

	const handleChange = (newValue: Dayjs | null) => {
		setBirthday(newValue);
	};

	return (
		<div className={UserRegistrationFormStyle.tweetForm}>
			<form onSubmit={profileSuccess}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<Grid container direction="column" className={UserRegistrationFormStyle.gridContainer}>
						<Grid item>
							<TextField
								name="Name"
								type="text"
								id="name"
								placeholder="FirstName LastName"
								onChange={(e) => setName(e.target.value)}
							/>
							<TextField
								name="UserName"
								type="text"
								id="userName"
								placeholder="Handle"
								onChange={(e) => setHandle(e.target.value)}
							/>
							<TextField
								name="Email"
								type="text"
								id="email"
								placeholder="someone@example.com"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								name="Password"
								type="text"
								id="password"
								placeholder="Strong Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Grid container direction="column" className={UserRegistrationFormStyle.gridContainer}>
						<Grid item>
							<DesktopDatePicker
								label="Date desktop"
								inputFormat="MM/DD/YYYY"
								value={birthday}
								onChange={handleChange}
								renderInput={(params: any) => <TextField {...params} />}
								className={UserRegistrationFormStyle.datePicker}
							/>
						</Grid>
						<Button type="submit">Register User</Button>
					</Grid>
				</LocalizationProvider>
			</form>
		</div>
	);
}

export default UserRegistrationForm;
