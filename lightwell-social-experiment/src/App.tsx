import YouMightLike from "./components/YouMightLikeComponent/YouMightLike";
import { Outlet } from 'react-router-dom';
import NavBar from "./components/NavbarComponent/NavBar";
import { CssBaseline, Hidden, Grid, useMediaQuery } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import {  User } from "./models/ProfileModel";
import { dark } from "./theme/dark";
import { light } from "./theme/light";
import { useAppSelector } from "./app/hooks/hooks";
import AppStyle from './App.module.scss';
import MobileNavBar from "./components/MobileNavBarComponent/MobileNavBar";

function App() {

	const user: User = useAppSelector(state => state.user.profile)
	const isMobile = useMediaQuery('(max-width: 600px)');

	return (
		<ThemeProvider theme={user?.theme === 'dark' ? dark : light}>	
			<CssBaseline>
				<div className="defaultLayout">
					<Grid container spacing={1.5}>
						
						{!isMobile && (
						<Grid item xs={0} sm={2}>
							<NavBar userTheme={user?.theme || "light"} />
						</Grid>)
						}

						{isMobile && (
						<Grid item xs={2} sm={2}>
							<MobileNavBar userTheme={user?.theme || "light"} />
						</Grid>)
						}

						<Grid item xs={12} sm={7.5} className={AppStyle.sidePadding}>
							<Outlet />
						</Grid>

						<Hidden smDown>
							<Grid item xs={0} sm={2.5}>
								<YouMightLike />
							</Grid>
						</Hidden>
						
					</Grid>
				</div>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
