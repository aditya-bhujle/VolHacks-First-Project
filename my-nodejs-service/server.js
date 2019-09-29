
const express = require('express');
const app = express();
//const bcrypt = require('bcrypt');

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'feisty-ward-254300',
  keyFilename: 'feisty-ward-254300-e730983e4e17.json',
});

let docRef = db.collection('users').doc('alovelace');
let setAda = docRef.set({
  password: "password"});
/** encrypt password
bcrypt.hash('password',10,function(err, hash){
let setAda = docRef.set({
  password: hash
  });
});
**/
//decryption


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});


