


export default async (req, res) => {
	const message = req.body;

	const user = await selectPlayerDB(message.username);

	// checks if the requested user exists
	if (user != undefined) {
		// checks password
		if (user.password_hash == message.password) {
			//cambiar por password + anadir mecanismo hash
			user.stars = message.newStars;
			user.mooncoins = message.newMooncoins;
			await updatePlayerDB(user.username, user);
			res.status(200).json({ result: "success", reason: "" });
		} else {
			res.status(200).json({ result: "error", reason: "wrong_password" });
		}
	} else {
		res.status(200).json({ result: "error", reason: "user_not_found" });
	}
};
