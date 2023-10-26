import React, { useState } from "react";
import { useStore } from "react-redux";
import { login } from "../../api/UserApi";
import { Profile, User } from "../../models/ProfileModel";
import { Alert, AlertTitle, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, SvgIcon, TextField, ThemeProvider, Typography } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { styled } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { authSlice } from "../../redux/ducks/user_duck/userSlice";
import { selectOptions } from "@testing-library/user-event/dist/types/setup/directApi";
import LoginStyle from "./loginStyle.module.scss";

const LoginButton: any = styled(Button)`
	color: #ffffff;
	background-color: #1DA1F2;
	font-weight: bold;
	border-radius: 20px;
	padding: 8px 18px;
	width: 520px;
	margin: 50px;
	padding: 0px;
`;

const theme = createTheme();

function Login(props: any) {
	const navigate = useNavigate();
	const store = useStore();
	const state: any = store.getState();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginAttempted, setloginAttempted] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		let user = new User()
		user.email = email;
		user.password = password;
		const action = login(user);

		store
			.dispatch(action)
			.unwrap()
			.then(handleRedirect)
			.catch((error: any) => {
				handleBadLogin(error);
			});

		e.target.reset();

		if (props.className == "modal") {
			props.handleClose();
		}
	};

	function handleRedirect() {
		const currentState: any = store.getState();

		if (currentState.user.profile.token !== null && currentState.user.loginSuccess == true) { // Change eventually from token exists -> token is valid and isn't expired
			navigate("/profile/" + currentState.user.profile.screen_name); 
		}
	}

	function handleBadLogin(error: any) {
		setloginAttempted(true)

		if (error.response.status == 400) {
			console.log(error);
		}
	}

	return (
		<div className={LoginStyle.loginContainer}>
			<ThemeProvider theme={theme}>
				<Container component="main" maxWidth="xs">
					<Box
						sx={{
							marginTop: 8,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<div className={LoginStyle.twitterIcon}>
							<SvgIcon component={TwitterIcon} style={{ fontSize: 40 }} />
						</div>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>

						{state.user.loginSuccess === false && loginAttempted === true &&
							<Alert severity="error" className={LoginStyle.errorAlertBox}>
								{state.user.message}
							</Alert>
						}

						<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<LoginButton
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 3, padding: 1, width: 300 }}
							>
								Sign In
							</LoginButton>
							<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href="/signup" variant="body2">
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		</div>

	);
}

export default Login;