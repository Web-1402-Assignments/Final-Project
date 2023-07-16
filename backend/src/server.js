const app = require("./index");
require("dotenv").config();

const connect = require("./configs/db");

const port = 5000;
app.listen(port, async () => {
	await connect();
	console.log("The Server is Live on",port);
});
