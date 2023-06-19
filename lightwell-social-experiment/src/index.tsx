import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./colorConstants";
import { ThemeProvider } from "@emotion/react";
import "./index.module.scss";
import HomePage from "./pages/HomePage/HomePage";
import { NotificationPage } from "./pages/Notifications/NotificationPage";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([{
	path: "",
	element: <App />,
	// errorElement:
	children: [
		{
			path: "/",
			element: <HomePage />
		},
		{
			path: "/notifications",
			element: <NotificationPage />
		},
	]
}])

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
