const path = require(`path`);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/passwordreset', (req, res) => {
  res.sendFile(path.join(__dirname, '/passwordreset.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '/signup.html'));
});

app.use(express.static(path.join(__dirname, '')));

// database

const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'feisty-ward-254300',
  keyFilename: 'feisty-ward-254300-e730983e4e17.json',
});

let docRef = db.collection('users').doc('alovelace');
let setAda = docRef.set({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  busy: false
});

// database

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});