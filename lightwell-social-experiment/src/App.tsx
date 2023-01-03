import React from 'react';
import logo from './logo.svg';
import { Counter } from './components/CounterComponent/Counter';
import { Routes, Route } from "react-router-dom";
import { NotificationPage } from "./pages/Notifications/NotificationPage";
import HomePage from "./pages/HomePage/HomePage";
import { ExplorePage } from "./pages/ExplorePage/ExplorePage";
import './App.css';
import RegistrationPage from './pages/AuthenticationPage/RegistrationPage';

function App() {
  return (
    <div>
      <Routes>
				<Route path="/notifications" element={<NotificationPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/explore" element={<ExplorePage />} />
				<Route path="/messages" />
				<Route path="/bookmarks" />
				<Route path="/lists" />
				<Route path="/profile" />
				<Route path="/more" element={<Counter/>}/>
				<Route path="/signup" element={<RegistrationPage/>}/>
			</Routes>
    </div>
  );
}

export default App;
