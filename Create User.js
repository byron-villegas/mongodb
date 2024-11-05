db.createUser({ user: "user_example", pwd: passwordPrompt(), roles: [{ role: "readWrite", db: "db_example" }] });
