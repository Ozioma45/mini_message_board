CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (user_name, text)
VALUES 
    ('Amando', 'Hi there!'),
    ('Charles', 'Hello World!');
