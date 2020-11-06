import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { useDataLayerValue } from "./DataLayer";
import Profile from "./components/Profile/Profile";

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();
	// const getTokenFromUrl = () => {
	// 	console.log(window.location);
	// 	return window.location.hash
	// 		.substring(1)
	// 		.split("?")
	// 		.reduce((initial, item) => {
	// 			let parts = item.split("=");
	// 			initial[parts[0]] = decodeURIComponent(parts[1]);
	// 			return initial;
	// 		}, {});
	// };

	useEffect(() => {
		//	const hash = getTokenFromUrl();
		//	window.location.hash = "";
		const _token = token;
		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="App">{token ? <Profile user={user} /> : <Login />}</div>
	);
}

export default App;
