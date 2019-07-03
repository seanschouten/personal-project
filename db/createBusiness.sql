INSERT INTO businesses (name, city, address, owner_id)
VALUES (${name}, ${city}, ${address}, ${user_id})
returning *

