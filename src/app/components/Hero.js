import React from "react";
import { ReactComponent as CodeAdornWordmark } from "../images/logo/code-adorn-wordmark.svg";

const Hero = () => {
	return (
		<header className="hero">
			<div className="hero__page-title">
				<h1 className="hidden">code_adorn</h1>
				<span className="logo">
					<CodeAdornWordmark />
				</span>
			</div>
			<p className="hero__intro">
				Show off that beautiful source code.<br></br>Start typing or drop a file into the editor to start.
			</p>
		</header>
	);
};

export default Hero;
