import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/state-provider/store";
import App from "./app/App";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
