import React, { useState } from "react";
import { useStore } from "react-redux";
import { login } from "../../api/UserApi";
import { Profile, User } from "../../models/ProfileModel";
import { Alert, AlertTitle, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, SvgIcon, TextField, ThemeProvider, Typography } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { styled } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import "./loginStyle.css";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { authSlice } from "../../redux/ducks/user_duck/userSlice";
import { selectOptions } from "@testing-library/user-event/dist/types/setup/directApi";

const LoginButton: any = styled(Button)`
	color: #ffffff;
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

		const user = new User(email, password)
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

		if (currentState.user.profile.token !== null && currentState.user.loginSuccess == true) { // Change eventually from toxen exists -> token is valid and isn't expired
			console.log("HANDLE REDIRECT INSIDE OF IF WORKS.");
			navigate("/profile") //fixme: put navigates into state
		}
	}

	function handleBadLogin(error: any) {
		setloginAttempted(true)

		if (error.response.status == 400) {
			console.log(error);
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<div className="twitter-icon">
						<SvgIcon component={TwitterIcon} />
					</div>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>

					{state.user.loginSuccess === false && loginAttempted === true &&
						<Alert severity="error" className="error-alert-box">
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
							sx={{ mt: 3, mb: 2 }}
							id="login-button"
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
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default Login;