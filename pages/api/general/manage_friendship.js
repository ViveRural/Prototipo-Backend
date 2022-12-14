






import {checkFields} from "../../../lib/checkFields";


export default async (req, res) => {
	const message = req.body;
	
	const fields = ['username','password','targetUser','type'];

	const rest = checkFields(message,fields)
	if (rest.length != 0){
		const msg = "invalid credentials, expected: " + rest
		res.status(200).json({ result: "error", reason: msg });
		return;
	}

	const user = await selectPlayerDB(message.username);

	// checks the autenticity
	if (user != undefined) {
		if (user.password_hash == message.password) {
			//cambiar por password + anadir mecanismo hash

			const targetUser = await selectPlayerDB(message.targetUser);

			if (targetUser != undefined) {
				if (message.type == "add") {
					
					// Send petition to targetUser
					const petition = await selectPetitionDB(
						message.targetUser,
						message.username
					);
					if (petition == undefined) {
						const petition = await selectPetitionDB(
							message.username,
							message.targetUser
						);
						if (petition == undefined){
							// no petition from both -> creates a petition
							await createPetitionDB(
							message.username,
							message.targetUser
						);
						}
						
					} else {
						// petition from targetUser -> creates a friendship
						await createFriendshipDB(
							message.username,
							message.targetUser
						);
						await deletePetitionDB(
							message.targetUser,
							message.username
						);
					}
				} else if (message.type == "delete") {
					//Delete from friends
					const frDirection = await selectFriendshipDB(message.username,
															message.targetUser)
					
					if (frDirection.length != 0){
						await deleteFriendshipDB(
							message.username,
							message.targetUser
						);

					} else {
						await deleteFriendshipDB(
							message.targetUser,
							message.username
						);
					}
				}
			}
			res.status(200).json({
				result: "success",
				reason: "",
			});
		} else {
			res.status(200).json({ result: "error", reason: "wrong_password" });
		}
	} else {
		res.status(200).json({ result: "error", reason: "user_not_found" });
	}
};
