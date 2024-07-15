import express from "express";

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

const mockUsers = [
	{ id: 1, username: "quan", displayName: "Quan" },
	{ id: 2, username: "john", displayName: "John" },
	{ id: 3, username: "anne", displayName: "Anne" },
	{ id: 4, username: "long", displayName: "Long" },
	{ id: 5, username: "thanh", displayName: "Thanh" },
	{ id: 6, username: "binh", displayName: "Binh" },
	{ id: 7, username: "thao", displayName: "Thao" },
	{ id: 8, username: "hoang", displayName: "Hoang" },
];
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
	res.status(201).send({ msg: "Hello World" });
});

app.get("/api/users", (req, res) => {
	console.log(req.query);
	const {
		query: { filter, value },
	} = req;
	// when filter and value are underfined
	if (!filter && !value) return res.send(mockUsers);
	if (filter && value)
		return res.send(mockUsers.filter((user) => user[filter].includes(value)));
});
app.post("/api/users", (req, res) => {
	const { body } = req;
	const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
	mockUsers.push(newUser);
	return res.status(201).send(200);
});
app.get("/api/users/:id", (req, res) => {
	console.log(req.params);
	const parsedId = parseInt(req.params.id);
	console.log(parsedId);
	if (isNaN(parsedId))
		return res.status(400).send({ msg: "Bad Request. Invalid ID" });
	const findUser = mockUsers.find((user) => user.id === parsedId);
	if (!findUser) return res.status(404).send({ msg: "User not found" });
	return res.send(findUser);
});

//localhost:3000
