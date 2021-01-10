import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<ul className="footer__footer-links">
				<li className="footer-link">
					<a href="https://github.com/sprioleau/code-adorn">source</a>
				</li>
				<li className="footer-link">
					<a href="https://github.com/sprioleau">about</a>
				</li>
			</ul>
			<div className="byline">
				created by <span className="credit">@sprioleau</span>👨🏾‍💻
			</div>
		</footer>
	);
};

export default Footer;
