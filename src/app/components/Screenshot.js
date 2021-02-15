import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Screenshot = () => {
	const { width, height } = useWindowSize();
	const url = useSelector((state) => state.screenshotUrl);

	return (
		<div className="screenshot">
			<Confetti
				width={width}
				height={height}
				numberOfPieces={250}
				colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]}
				recycle={false}
			/>
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
