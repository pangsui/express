import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: ["http://localhost:5173"] }));

const PORT = 3310;

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};
app.get("/api/employees", (req, res) => {
	res.json(sampleEmployee);
});
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
