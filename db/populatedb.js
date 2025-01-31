#!/usr/bin/env node

const { Client } = require("pg");
require("dotenv").config(); // Load environment variables

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (user_name, text)
VALUES 
    ('Amando', 'Hi there!'),
    ('Charles', 'Hello World!')
ON CONFLICT (id) DO NOTHING;
`;

async function main() {
  console.log("Seeding database...");

  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=require`,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database seeding complete.");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.end();
  }
}

main();
