import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Screenshot = () => {
	const url = useSelector((state) => state.screenshotUrl);
	return (
		<>
			{url ? (
				<img src={url} alt="code-adorn-screenshot" width="100%" />
			) : (
				<div className="button-wrapper">
					<Link to="/">
						<button className="btn">
							<span className="icon arrow-icon">⬅️</span>Go back home
						</button>
					</Link>
				</div>
			)}
		</>
	);
};

export default Screenshot;
