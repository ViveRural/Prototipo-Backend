import crypto from "crypto";


import {checkFields} from "../../../lib/checkFields";
//import CryptoJS from "crypto-js"

export default async (req, res) => {
	res.status(200).json({ result: "success", reason: "" });
	/*
	const message = req.body;
	
	const fields = ['username','password','email','salt'];

	const rest = checkFields(message,fields)
	if (rest.length != 0){
		const msg = "invalid credentials, expected: " + rest
		res.status(200).json({ result: "error", reason: msg });
		return;
	}

	//const user = await selectPlayerDB(message.username);

	// checks is the username is already taken
	if (user == undefined) {
		// se puede poner == null
		//const salt = crypto.randomBytes(16).toString("hex")

		const query = {
			username: message.username,
			email: message.email,
			salt: message.salt,
			password_hash: message.password,
			//password: CryptoJS.SHA512(salt + message.password).toString(),
			image_ID: 0, // ID number of the default profile picture (HARDCODED)
			stars: 0, // amount of initial stars (HARDCODED)
			mooncoins: 100, // amount of initial coins (HARCODED)
		};

		try {
			await createPlayerDB(query);
		} catch (e) {
			if (e.code == "P2002") {
				//Unique constraint failed on the {constraint}
				res.status(200).json({
					result: "error",
					reason: "email_already_registered",
				});
				return;
			}
		}
		// if(la introduccion ha ido bien){
		res.status(200).json({ result: "success", reason: "" });
		//} else error
	} else {
		res.status(200).json({
			result: "error",
			reason: "user_already_registered",
		});
	}*/
};
