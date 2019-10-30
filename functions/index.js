const functions = require('firebase-functions');
const admin = require('firebase-admin')


admin.initializeApp();


const express = require('express');
const app = express();
//const firebase = require('../config/firebase');
//var provider = new firebase.auth.GoogleAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


app.get('/products', (req, res) => {
    admin
        .firestore()
        .collection('product')
        // .where('createAt', '==', new Date())
        .get()
        .then(data => {
            let product = [];
            data.forEach(doc => {
                product.push({
                    productId: doc.id,
                    user: doc.data().user,
                    tagline: doc.data().tagline,
                    product: doc.data().product,
                    thumbnail: doc.data().thumbnail,
                    createAt: doc.data().createAt,
                    topics: doc.data().topics,
                    status: doc.data().status,
                    download_link: doc.data().download_link,
                    upvote: doc.data().upvote,
                    likecount: doc.data().likecount

                });
            });

            return res.json(product)
        })
        .catch(err => console.error(err));
})

app.post('/product', (req, res) => {
    const product = {

        "user": req.body.user,
        "tagline": req.body.tagline,
        "product": req.body.product,
        "thumbnail": req.body.thumbnail,
        "createAt": new Date().toISOString(),
        "topics": req.body.topics,
        "status": req.body.status,
        "download_link": req.body.download_link,
        "upvote": req.body.upvote,
        "likecount": req.body.likecount

    };

    admin.firestore()
        .collection('product')
        .add(product)
        .then(doc => {
            res.json({
                message: `documents ${doc.id} creer avec succes`
            }).catch(err => {
                res.status(500).json({ error: 'erreur' });
                console.error(err);
            })
        })

});

//signup route 

app.post('/signup', (res, req) => {

})
exports.api = functions.region('europe-west1').https.onRequest(app);