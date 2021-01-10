const express = require("express");
const path = require("path");
const app = express();
const fetch = require("node-fetch");

const PORT = 5000;
const PROD_BASE_URL = "code-adorn.netlify.app";

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api", (req, res) => {
	const fetchUrl = `https://screenshotapi.net/api/v1/screenshot?token=HX0FEKAOF3HJ6QED82YMPI5IHCXPES9P&url=${PROD_BASE_URL}&output=image&fresh=true&selector=.code-editor-wrapper`;

	const getScreenshot = async (res, url) => {
		const fetchResponse = await fetch(url);
		const screenshotUrl = await fetchResponse.url;

		if (fetchResponse.status === 200) {
			res.status(200);
			res.send({ url: screenshotUrl, status: 200, success: true });
		} else {
			res.send({ error: { message: "There was an error when fetching screenshot" }, status: 500, success: false });
		}
	};

	getScreenshot(res, fetchUrl);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
