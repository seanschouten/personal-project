nameCREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR,
    password VARCHAR,
    email VARCHAR
);

CREATE TABLE businesses (
    business_id SERIAL PRIMARY KEY,
    name VARCHAR,
    city VARCHAR,
    address VARCHAR,
    description VARCHAR(240),
    owner_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE favorites (
    favorites_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    business_id INTEGER REFERENCES businesses(business_id)
);