import { Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { myTweets } from "../../redux/ducks/post_duck/tweetFormSlice";
import { useSelector, useStore } from "react-redux";
import { Profile, User } from "../../models/ProfileModel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { addUser, editUser } from "../../api/UserApi";
import { useAppSelector } from "../../app/hooks/hooks";
import type { } from "redux-thunk/extend-redux";
import dayjs, { Dayjs } from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import UserRegistrationFormStyle from "./userRegistrationFormStyle.module.scss";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Media from "../MediaComponent/Media";
function UserRegistrationForm(props: any) {
	const store = useStore();
	const state: any = store.getState();

	const feed = useAppSelector(myTweets);
	const user : User = useSelector((state: any) => state.user.profile)

	const [name, setName] = useState("");
	const [handle, setHandle] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [birthday, setBirthday] = React.useState<Dayjs | null>(
		dayjs("2014-08-18T21:11:54")
	);



	useEffect(() => {

	}, []);

	const profileSuccess = (e: any) => {
		e.preventDefault();
		let action = null;

		if (user) {
			if (birthday !== null) {
				user.dateOfBirth = new Date(birthday.toString());
			}
			user.name = name;
			user.screen_name = handle;
			user.email = email;
			user.password = password;

			if (props.profileStatus === "edit") {
				console.log("EDIT")
				action = editUser(user);
			} else {
				console.log("CREATE")
				action = addUser(user);
			}

			store
				.dispatch(action)
				.unwrap()
				.catch((error: any) => {
					console.log(error);
				});
		}

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
								defaultValue={user?.name || ""}
								onChange={(e) => setName(e.target.value)}
							/>
							<TextField
								name="UserName"
								type="text"
								id="userName"
								placeholder="Handle"
								defaultValue={user?.screen_name || ""}
								onChange={(e) => setHandle(e.target.value)}
							/>
							<TextField
								name="Email"
								type="text"
								id="email"
								placeholder="someone@example.com"
								defaultValue={user?.email || ""}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								name="Password"
								type="text"
								id="password"
								placeholder="Strong Password"								
								onChange={(e) => setPassword(e.target.value)}
							/>
							{
								props.profileStatus === "edit" ? <Media /> : null
							}
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
						{
							props.profileStatus === "edit" ? <Button type="submit">Update User</Button> : <Button type="submit">Register User</Button>
						}
					</Grid>
				</LocalizationProvider>
			</form>
		</div>
	);
}

export default UserRegistrationForm;
