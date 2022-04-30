const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
/* const HttpsProxyAgent = require("https-proxy-agent");

const agent = new HttpsProxyAgent("http:localhost:3128"); */

initializeApp({
    credential: applicationDefault(),
    // httpAgent: agent
});

const db = getFirestore();

module.exports = { db };


//$env:https_proxy="http://localhost:3128"