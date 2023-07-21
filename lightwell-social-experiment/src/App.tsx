import React, { createContext, useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./components/CounterComponent/Counter";
import { Routes, Route } from "react-router-dom";
import { NotificationPage } from "./pages/Notifications/NotificationPage";
import HomePage from "./pages/HomePage/HomePage";
import { ExplorePage } from "./pages/ExplorePage/ExplorePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RepliesPage } from "./pages/RepliesPage/RepliesPage";
import RegistrationPage from "./pages/AuthenticationPage/RegistrationPage";
import AppStyle from "./App.module.scss";
import YouMightLike from "./components/YouMightLikeComponent/YouMightLike";
import { Outlet } from 'react-router-dom';
import NavBar from "./components/NavbarComponent/NavBar";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useDispatch, useStore } from "react-redux";
import { Tweet } from "./models/TweetModel";
import { editUser, updateUser } from "./api/UserApi";
import { store } from "./app/store";
import { User } from "./models/ProfileModel";

export type Theme = 'light' | 'dark'

function App() {

	const state: any = store.getState();

	const [theme, setTheme] = React.useState<String>(store.getState().user.profile.theme || "light");

	function reverseTheme(theme: String) {
		if (theme === "light") {
			return "dark";
		} else {
			return "light";
		}
	}
	
	const toggleTheme = () => {
		setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')

		// set current users theme to currentTheme
		let user: User = {...state.user.profile};
		user.theme = reverseTheme(theme);

		// if current user is logged in, then edit user to include their theme preference
		if(state.user !== null) {
			const action = editUser(user)
			console.log("Inside the toggleTheme function. Current theme: " + user.theme)
			console.log(user)
			store.dispatch(action);
		}

	}

	// add profile indicator for light / dark theme. Make a mongo call to set that property. 
	// Make l/d mode a component
	// add component

	const light = createTheme({
		palette: {
    
    primary: {
      main: '#5893df',
    },
    secondary: {
      main: '#2ec5d3',
    },
    background: {
      default: '#192231',
      paper: '#24344d',
    },
  },
		// components: {
		// 	MuiGrid: {
		// 		styleOverrides: {
		// 			root: {
		// 				backgroundColor: "aliceBlue"
		// 			}
		// 		}
		// 	},
			
		// 	// MuiPaper: {
		// 	// 	styleOverrides: {
		// 	// 		root: {
		// 	// 			elevation:""
		// 	// 		}
		// 	// 	}
		// 	// }
		// }		
	});
	const dark = createTheme({
	
	palette: {
    mode: 'dark',
  },
	
		components: {
			MuiGrid: {
				styleOverrides: {
					root: {
						backgroundColor: "grey"
					}
				}
			},
		// 	// MuiPaper: {
		// 	// 	styleOverrides: {
		// 	// 		root: {
		// 	// 			elevation:""
		// 	// 		}
		// 	// 	}
		// 	// }
		}		
	});


	
	return (
			// check profile user state -> set to corresponding theme
			<ThemeProvider theme={theme === 'light' ? light : dark}>	

			<div className="defaultLayout">
				<Grid container spacing={1.5}>
					
					<Grid item xs={0} sm={1.5}>
						<Grid item>
							<button onClick={toggleTheme}>{theme}</button>
						</Grid>

						<NavBar />
					</Grid>

					<Grid item xs={12} sm={7.5}>
						<Outlet />
					</Grid>

					<Grid item xs={0} sm={3}>
						<YouMightLike />
					</Grid>
				</Grid>
				</div>
			</ThemeProvider>
	);
}

export default App;
