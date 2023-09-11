import YouMightLike from "./components/YouMightLikeComponent/YouMightLike";
import { Outlet } from 'react-router-dom';
import NavBar from "./components/NavbarComponent/NavBar";
import { CssBaseline, Hidden, Grid } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import {  User } from "./models/ProfileModel";
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
						
						<Grid item xs={2} sm={1.5}>
							<NavBar userTheme={user?.theme || "light"} />
						</Grid>

						<Grid item xs={10} sm={8}>
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
