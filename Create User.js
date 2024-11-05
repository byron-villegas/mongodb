db.createUser({ user: "user_example", pwd: passwordPrompt(), roles: [{ role: "readWrite", db: "db_example" }] }); // passwordPrompt request you type the password from console
