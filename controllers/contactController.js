const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const 																						getContacts = asyncHandler(async (req, res) => {
	res.status(200).json({ msg: "Get all contacts" });
});

//@desc Create new contact
//@route POST /api/contacts
//@access Public

const createContact = asyncHandler(async (req, res) => {
	console.log("The request body is:", req.body);
	const { name, email, phone } = req.body;
	if (!name || !email || !phone) {
		res.status(400);
		throw new Error("No empty fields");
	}
	res.status(201).json({ msg: "Create new contact" });
});

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access Public

const getContact = asyncHandler(async (req, res) => {
	res.status(200).json({ msg: `Get contact for ${req.params.id}` });
});
//@desc Update contact by id
//@route PUT /api/contacts/:id
//@access Public

const updateContact = asyncHandler(async (req, res) => {
	res.status(200).json({ msg: `Update contact for ${req.params.id}` });
});

//@desc Delete contact by id
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = asyncHandler(async (req, res) => {
	res.status(200).json({ msg: `Delete contact for ${req.params.id}` });
});

module.exports = {
	getContacts,
	createContact,
	getContact,
	updateContact,
	deleteContact,
};
