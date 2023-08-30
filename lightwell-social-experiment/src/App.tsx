import React, { createContext, useEffect } from "react";
import YouMightLike from "./components/YouMightLikeComponent/YouMightLike";
import { Outlet } from 'react-router-dom';
import NavBar from "./components/NavbarComponent/NavBar";
import { CssBaseline, FormControlLabel, Grid, Switch, FormGroup } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useDispatch, useStore } from "react-redux";
import { Tweet } from "./models/TweetModel";
import { editUser } from "./api/UserApi";
import { store } from "./app/store";
import { Profile, User } from "./models/ProfileModel";
import { text } from "stream/consumers";
import { dark } from "./theme/dark";
import { light } from "./theme/light";
import { useAppSelector } from "./app/hooks/hooks";

function App() {


	const user: User = useAppSelector(state => state.user.profile)

	return (
		<ThemeProvider theme={user?.theme === 'dark' ? dark : light}>	
			<CssBaseline>
				<div className="defaultLayout">
					<Grid container spacing={1.5}>
						
						<Grid item xs={0} sm={1.5}>
							<NavBar userTheme={user?.theme}/>
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
