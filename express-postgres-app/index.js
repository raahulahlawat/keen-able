// Express.js server code (index.js)

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_password',
  port: 5432,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// POST request to handle form submission
app.post('/submitForm', (req, res) => {
  const { first_name, last_name, email, education, address, city, pincode, dob } = req.body;
  pool.query('INSERT INTO your_table (first_name, last_name, email, education, address, city, pincode, dob) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
  [first_name, last_name, email, education, address, city, pincode, dob], (error, results) => {
    if (error) {
      console.error('Error executing query', error);
      res.status(500).send('Error submitting form');
    } else {
      res.status(201).send('Form submitted successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${3333}`);
});
