
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const {connectToDb , getDb} = require('./src/components/db');

const {OAuth2Client} = require('google-auth-library');

const PORT = 3001;
const REACT_APP_GOOGLE_CLIENT_ID = "691771711130-vfa4ih67qscejn55ahcufame4plrpcud.apps.googleusercontent.com";

let db;

connectToDb((err) => {
    if(!err){
        app.listen(PORT, () =>{
            console.log(PORT);
            console.log(`Server is running at http://localhost:${PORT}`);
        })
        db = getDb();

        //Create a collection name "customers":
        db.createCollection("behave", function(err, result) {
            if (err) throw err;
            console.log("Collection is created!");
            // close the connection to db when you are done with it
            db.close();
        });
    }
    else{
        console.log(err);
    }
})

// using this we can use env variables here
dotenv.config();

const client = new OAuth2Client(REACT_APP_GOOGLE_CLIENT_ID);
app.use(express.json());

const users = [];

function upsert(array,item){
    const i = array.findIndex(( _item ) => _item.email === item.email);
    if(i > -1)  array[i] = item;
    else array.push(item);
}

app.post('/api/google-login',async(req,res) => {
    const {token} = req.body;
    const ticket = await client.verifyIdToken({
        idToken : token,
        audience : REACT_APP_GOOGLE_CLIENT_ID,
    });

    const {name,email,picture} = ticket.getPayload();

    upsert(users,{name,email,picture});

    var doc = { name: "Roshan", age: "22" };
    db.Collection('behave').insertOne(doc).
    then(result =>{
        res.status(201).json(result);
    })
    .catch(err =>{
        res.status(404).json({error:'Could not create document'})
    })
    // res.status(201);
    // res.json({name,email,picture});
});

// app.listen(PORT, () =>{
//     console.log(PORT);
//     console.log(`Server is running at http://localhost:${PORT}`);
// })

