const express = require('express');
const router = express.Router();
const ufController = require('../controllers/ufController');
const { client, connectDb } = require('../db/db');

// rota root
router.get('/', ( req, res ) => {
    connectDb( req, res, client );
})

// ================= rotas uf =========================

router.get('/uf', async ( req, res ) => {
    ufController.getAll( req, res, client );
})

router.get('/uf/searchOne', async ( req, res ) => {
    ufController.searchOne( req, res, client );
})

// rota de adição de objetos
router.post('/uf/addOne', async ( req, res ) => {
    ufController.addOne( req, res, client );
});

module.exports = router;