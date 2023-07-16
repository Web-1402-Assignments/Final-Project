require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
	return jwt.verify(token, process.env.JWT_ACCESS_KEY);
};

module.exports = (req, res, next) => {
	
	const bearerToken = req?.header?.authorization; 

	
	if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
		return res
			.status(400)
			.json({ status: "failed", message: "Please Provide valid token" });
	}

	
	const token = bearerToken.split(" ")[1];

	let user;
	try {
		user = verifyToken(token);
	} catch (e) {
		return res.status(400).json({
			status: "failed",
			message: "Please provide a valid token",
		});
	}

	
	if (!user) {
		return res
			.status(400)
			.json({ status: "failed", message: "Please Provide valid token" });
	}

	req.user = user;

	
	return next();
};
