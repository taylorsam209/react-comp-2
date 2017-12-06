require("dotenv").config();
const express = require("express"),
    bodyParser = require("body-parser"),
    massive = require("massive"),
    cors = require("cors")

    const PORT = 3010;
    const app = express();

    app.use(bodyParser.json());
    app.use(cors());
    
    massive(process.env.CONNECTION_STRING).then(db => {
        app.set('db', db);
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
        console.log('Massive is running/connected to DB.')
    })
    
    app.get('/api/animals', (req, res)=>{
        const db=req.app.get('db')
        db.get_all_animals()
        .then(animals=> {
            res.status(200).send(animals)
        })
    })

    app.get('/api/animal/:id', (req, res)=>{
        const db=req.app.get('db')
        const id=req.params.id
        db.get_animal(id)
        .then(animal=>{
            res.status(200).send(animal[0])
        })
    })

    
    
    