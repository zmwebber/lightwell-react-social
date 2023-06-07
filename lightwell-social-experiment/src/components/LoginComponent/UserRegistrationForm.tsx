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
	const user : User = useAppSelector(state => state.user.profile)
	const [password, setPassword] = useState("");
	const [name, setName] = useState(user?.name ?? "");
	const [handle, setHandle] = useState(user?.screen_name ?? "");
	const [email, setEmail] = useState(user?.email ?? "");	
	const [birthday, setBirthday] = React.useState<Dayjs | null>(
		dayjs(user?.dateOfBirth)
	);

	useEffect(() => {		
		}, [user]); // Only re-run the effect if user changes
	
	  const profileSuccess = (e: any) => {	
		e.preventDefault();
		let modalClose = false;
		let action = null;
		console.log("Submit User Registration:  " + JSON.stringify(user))
		if (user) {		
			console.log('profile exists')
			
			//create a copy of the state profile
			var info : User = {...user};					
			// see what has changed from the user profile	

			if( info.name !== name)
			{
				console.log('name changed')
				console.log('profile.name: ' + user.name)
				console.log('form Name: ' + name)
				info.name = name;
				modalClose = true;
			}
			if( info.screen_name !== handle)
			{
				console.log('handle changed')
				console.log('profile.email: ' + info.screen_name)
				console.log('form handle: ' + handle)
				info.screen_name = handle;
				modalClose = true;
			}
			if( info.email !== email)
			{
				console.log('email changed')
				console.log('profile.email: ' + user.email)
				console.log('form email: ' + email)
				info.email = email;
				modalClose = true;
			}
			if( ! dayjs(info.dateOfBirth).isSame(birthday) && birthday)
			{
				console.log('dateOfBirth changed')
				console.log('profile.dateOfBirth: ' + dayjs(user.dateOfBirth).toDate())
				console.log('form dateOfBirth: ' + birthday?.toDate())
				info.dateOfBirth = birthday?.toDate();
				modalClose = true;
			}		
			
			if (props.profileStatus === "edit") {
				console.log("EDIT User " + JSON.stringify(info))
				action = editUser(info);
			} else {
				info.password = password;
				console.log("CREATE User " + JSON.stringify(info))
				action = addUser(info);
			}
			if (modalClose) {				
				props.onClose();
			}
			store
				.dispatch(action)
				.unwrap()				
				.catch((error: any) => {
					console.log(error);
				});	
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
							{props.profileStatus !== "edit" && 
							
								<TextField
								name="Password"
								type="text"
								id="password"
								placeholder="Strong Password"								
								onChange={(e) => setPassword(e.target.value)}/>
							 
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
