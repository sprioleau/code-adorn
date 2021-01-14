import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Toolbar from "./components/Toolbar";
import CodeEditor from "./components/CodeEditor";
import Footer from "./components/Footer";
import Screenshot from "./components/Screenshot";

import "./styles/app.scss";

// CodeMirror Style Imports
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/material-darker.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/base16-light.css";
import "codemirror/theme/cobalt.css";
import "codemirror/theme/blackboard.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/hopscotch.css";
import "codemirror/theme/3024-night.css";
import "codemirror/theme/lucario.css";

// CodeMirror Mode Imports
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/sass/sass";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/markdown/markdown";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<section className="app-container">
						<main>
							<Hero />
							<div className="main-content">
								<Toolbar />
								<CodeEditor />
							</div>
						</main>
						<Footer />
					</section>
				</Route>
				<Route path="/screenshot" exact>
					<Screenshot />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
