import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import "./index.module.scss";
import HomePage from "./pages/HomePage/HomePage";
import { NotificationPage } from "./pages/Notifications/NotificationPage";
import { ExplorePage } from "./pages/ExplorePage/ExplorePage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Counter } from "./components/CounterComponent/Counter";
import RegistrationPage from "./pages/AuthenticationPage/RegistrationPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RepliesPage } from "./pages/RepliesPage/RepliesPage";
import { theme } from "./colorConstants";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([{
	path: "",
	element: <App />,
	// errorElement:
	
		// 		<Route path="/messages" />
		// 		<Route path="/bookmarks" />
		// 		<Route path="/lists" />
	
	children: [
		{
			path: "/",
			element: <HomePage />
		},
		{
			path: "/notifications",
			element: <NotificationPage />
		},
		{
			path: "/explore",
			element: <ExplorePage />
		},
		{
			path: "/profile/:screen_name",
			element: <ProfilePage />
		},
		{
			path: "/more",
			element: <Counter />
		},
		{
			path: "/replies/:id",
			element: <RepliesPage />
		},
	],
},
		{
			path: "/signup",
			element: <RegistrationPage />
		},
		{
			path: "/login",
			element: <LoginPage />
		},
])

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
