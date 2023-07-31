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
import { CssBaseline, Grid } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useDispatch, useStore } from "react-redux";
import { Tweet } from "./models/TweetModel";
import { editUser, updateUser } from "./api/UserApi";
import { store } from "./app/store";
import { Profile, User } from "./models/ProfileModel";
import { text } from "stream/consumers";

export type Theme = 'light' | 'dark'

function App() {

	const state: any = store.getState();

	const [theme, setTheme] = React.useState<String>("light");

	// @TODO: When user is logged in and page is refreshed, user is logged out.
	function reverseTheme(theme: String) {
		if (theme === "light") {
			return "dark";
		} else {
			return "light";
		}
	}
	
	function setThemeOfUser() {
		if(store.getState().user.profile.theme !== undefined) {
			setTheme(store.getState().user.profile.theme);
		}
	}

	const toggleTheme = () => {
		setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')

		// set current users theme to currentTheme
		let user: Profile = {...state.user.profile};
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
			mode: 'light',
  },
	components: {
			MuiCardContent: {
				styleOverrides: {
					root: {
						userSelect: "none",
						cursor: "pointer",
						touchAction: "manipulation",
						display: "block",
						background: "transparent",
						border: 0
					}
				}
			}
		}
		// components: {
		// 	MuiGrid: {
		// 		styleOverrides: {
		// 			root: {
		// 				backgroundColor: "aliceBlue"
		// 			}
		// 		}
		// 	},

	// 	overrides: {
  //   MuiPaper: {
  //     root: {
  //       padding: '10px',
  //       marginBottom: '10px'
  //     },
  //   },
  // }

			
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
			primary: {
				main: '#ffffff',
				contrastText: '#ffffff'
			},
			secondary: {
				main: '#ffffff',
			},
			background: {
				paper: "#000000",
				default: '#192231',
			},
		
		},
		components: {
			MuiCardContent: {
				styleOverrides: {
					root: {
						userSelect: "none",
						cursor: "pointer",
						touchAction: "manipulation",
						display: "block",
						background: "transparent",
						border: 0
					}
				}
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundColor: "black",
					}
				}
			},
			MuiTypography: {
				styleOverrides: {
					root: {
						color: "white"
					}
				}
			}
		},
		// typography: {
		// 	color: "white"
		// }


		
		// overrides: {
		// 	MuiPaper: {
		// 		root: {
		// 			padding: '10px',
		// 			marginBottom: '10px'
		// 		},
		// 	},
		// },
		// components: {
		// 	MuiPaper: {
		// 		styleOverrides: {
		// 			root: {
		// 				backgroundColor: "red"
		// 			}
		// 		}
		// 	}}
		// 	MuiPaper: {
		// 		styleOverrides: {
		// 			elevation: 1
					
		// 		}
		// 	}
		// }		
	});

	useEffect(() => {
		setThemeOfUser();
	}, [])

	
	return (
		<ThemeProvider theme={theme === 'light' ? light : dark}>	
<CssBaseline>


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

			
</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
