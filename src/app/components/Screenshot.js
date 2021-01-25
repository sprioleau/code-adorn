import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Screenshot = () => {
	const url = useSelector((state) => state.screenshotUrl);
	return (
		<div className="screenshot">
			{url && <img src={url} className="screenshot__image" alt="code-adorn-screenshot" width="100%" />}
			<div className="screenshot__button-wrapper">
				<Link to="/">
					<button className="btn">
						<span className="icon arrow-icon">⬅️</span>
						{url ? "Create another" : "Go back home"}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Screenshot;
