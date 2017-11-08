// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const doorsControllers = require('./doors_controllers.js');


function setupMiddlewares(app) {
    // Automatically allow cross-origin requests
    app.use(cors());
    // Support JSON encoded body
    app.use(express.json());
    // Support encoded body
    app.use(express.urlencoded({extended: true }));
}

const app = express();
// Setup application middlewares
setupMiddlewares(app);

// Define routes!
app.put('/admin/puerta/:id', doorsControllers.update);
app.post('/admin/puerta/', doorsControllers.create);
app.get('/admin/puerta/', doorsControllers.list);
app.get('/admin/puerta/:id', doorsControllers.get);
app.delete('/admin/puerta/:id', doorsControllers.remove);

// Connect our Express Application with Firebase Functions ecosystem!
exports.api = functions.https.onRequest(app);
