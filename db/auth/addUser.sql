INSERT INTO users
(name, password, email)
values (${name}, ${hash}, ${email})
returning *;