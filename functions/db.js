const admin = require('firebase-admin');
// Pass the Firebase config directly to initializeApp() to auto-configure
// the Admin Node.js SDK
admin.initializeApp(functions.config().firebase);

var db = admin.database();
