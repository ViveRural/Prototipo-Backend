import { selectPlayerDB } from "../../../prisma/queries/SELECT/player";
import {checkFields} from "../../../lib/checkFields";

export default async (req, res) => {

	res.status(200).json({ result: "success", reason: "", salt: "0" });

	/*

	const message = req.body;
	
	const fields = ['username'];

	const rest = checkFields(message,fields)
	if (rest.length != 0){
		const msg = "invalid credentials, expected: " + rest
		res.status(200).json({ result: "error", reason: msg });
		return;
	}

	const user = await selectPlayerDB(message.username);

	// checks if the requested user exists
	if (user != undefined) {
        res.status(200).json({ result: "success", reason: "", salt: user.salt });
	} else {
		res.status(200).json({ result: "error", reason: "user_not_found" });
	}*/
};
