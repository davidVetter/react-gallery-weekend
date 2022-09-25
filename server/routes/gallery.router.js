const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const query = `UPDATE "gallery" SET "likes"=("likes"+1) WHERE "id"=$1;`;
    pool.query(query, [galleryId])
        .then((results) => {
        res.send(`Liked img ${galleryId}`).status(200);
        })
        .catch((error) => {
            console.log("error caught in PUT /like: ", error);
        });
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const query = `SELECT * FROM "gallery" ORDER BY "id" ASC;`;
    pool.query(query)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((error) => {
            console.log('ERROR making GET', error); 
            res.sendStatus(500);
    })
    //res.send(galleryItems).status(200);
}); // END GET Route

router.post('/', (req, res) => {
    const photoToAdd = req.body;
    const query = `INSERT INTO "gallery" ("path", "title", "description")
                   VALUES ($1, $2, $3);`;
    pool.query(query, [photoToAdd.path, photoToAdd.title, photoToAdd.description])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log("Error in POST: ", error);
            res.sendStatus(500);
        });
}); // END POST ROUTE

module.exports = router;