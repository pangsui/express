import express from "express";

const app = express();
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
app.get("/api/employee", (req, res) => {
	res.json(sampleEmployee);
});
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
