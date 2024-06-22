const express = require('express');
const router = express.Router();
const ufController = require('../controllers/ufController');
const { client, connectDb } = require('../db/db');
const rodoviaController = require('../controllers/rodoviaController');
const tipoRegiaoController = require('../controllers/tipoRegiaoController');
const classeTaxonomicaController = require('../controllers/classeTaxController');
const situacaoFinalAnimalController = require('../controllers/situFinalAnimalController');
const tipoPavimentoController = require('../controllers/tipoPavimentoController');
const especieController = require('../controllers/especieController');
const categoriaController = require('../controllers/categoriaController');
const categoriaLocalController = require('../controllers/categoriaLocalController');
const ocorrenciaLocalController = require('../controllers/ocorrenciaLocalController');
const ocorrenciaController = require('../controllers/ocorrenciaController');

// rota root (checkada)
router.get('/', ( req, res ) => {
    connectDb( req, res, client );
})

// ================= fim rotas root =========================
// ================= rotas uf =========================

// checkada
router.get('/uf', async ( req, res ) => {
    ufController.getAll( req, res, client );
})

// checkada
router.get('/uf/searchOne', async ( req, res ) => {
    ufController.searchOne( req, res, client );
})

// checkada
router.post('/uf/addOne', async ( req, res ) => {
    ufController.addOne( req, res, client );
});

// ================= fim rotas uf =========================
// ================= rotas rodovia =========================

// checkada
router.get('/rodovia', async ( req, res ) => {
    rodoviaController.getAll( req, res, client );
})

// checkada
router.get('/rodovia/searchOne', async ( req, res ) => {
    rodoviaController.searchOne( req, res, client );
})

// checkada
router.post('/rodovia/addOne', async ( req, res ) => {
    rodoviaController.addOne( req, res, client );
});

// ================= fim rotas rodovias =========================
// ================= rotas tipoRegiao =========================

// checkada
router.get('/tipoRegiao', async ( req, res ) => {
    tipoRegiaoController.getAll( req, res, client );
})

// checkada
router.get('/tipoRegiao/searchOne', async ( req, res ) => {
    tipoRegiaoController.searchOne( req, res, client );
})

// checkada
router.post('/tipoRegiao/addOne', async ( req, res ) => {
    tipoRegiaoController.addOne( req, res, client );
});

// ================= fim rotas rodovias =========================
// ================= rotas classeTaxonomica =========================

// checkada
router.get('/classeTaxonomica', async ( req, res ) => {
    classeTaxonomicaController.getAll( req, res, client );
})

// checkada
router.get('/classeTaxonomica/searchOne', async ( req, res ) => {
    classeTaxonomicaController.searchOne( req, res, client );
})

// checkada
router.post('/classeTaxonomica/addOne', async ( req, res ) => {
    classeTaxonomicaController.addOne( req, res, client );
});

// ================= fim rotas classeTaxonomica =========================
// ================= rotas situacaoFinalAnimal =========================

// checkada
router.get('/situacaoFinalAnimal', async ( req, res ) => {
    situacaoFinalAnimalController.getAll( req, res, client );
})

// checkada
router.get('/situacaoFinalAnimal/searchOne', async ( req, res ) => {
    situacaoFinalAnimalController.searchOne( req, res, client );
})

// checkada
router.post('/situacaoFinalAnimal/addOne', async ( req, res ) => {
    situacaoFinalAnimalController.addOne( req, res, client );
});

// ================= fim rotas situacaoFinalAnimal =========================
// ================= rotas tipoPavimento =========================

// checkada
router.get('/tipoPavimento', async ( req, res ) => {
    tipoPavimentoController.getAll( req, res, client );
})

// checkada
router.get('/tipoPavimento/searchOne', async ( req, res ) => {
    tipoPavimentoController.searchOne( req, res, client );
})

// checkada
router.post('/tipoPavimento/addOne', async ( req, res ) => {
    tipoPavimentoController.addOne( req, res, client );
});

// ================= fim rotas tipoPavimento =========================
// ================= rotas especie =========================

// checkada
router.get('/especie', async ( req, res ) => {
    especieController.getAll( req, res, client );
})

// checkada
router.get('/especie/searchOne', async ( req, res ) => {
    especieController.searchOne( req, res, client );
})

// checkada
router.post('/especie/addOne', async ( req, res ) => {
    especieController.addOne( req, res, client );
});

// ================= fim rotas especie =========================
// ================= rotas categoria =========================

// checkada
router.get('/categoria', async ( req, res ) => {
    categoriaController.getAll( req, res, client );
})

// checkada
router.get('/categoria/searchOne', async ( req, res ) => {
    categoriaController.searchOne( req, res, client );
})

// checkada
router.post('/categoria/addOne', async ( req, res ) => {
    categoriaController.addOne( req, res, client );
});

// ================= fim rotas categoria =========================
// ================= rotas categoriaLocal =========================

// checkada
router.get('/categoriaLocal', async ( req, res ) => {
    categoriaLocalController.getAll( req, res, client );
})

// checkada
router.get('/categoriaLocal/searchOne', async ( req, res ) => {
    categoriaLocalController.searchOne( req, res, client );
})

// checkada
router.post('/categoriaLocal/addOne', async ( req, res ) => {
    categoriaLocalController.addOne( req, res, client );
});

// ================= fim rotas categoriaLocal =========================
// ================= rotas ocorrenciaLocal =========================

// checkada
router.get('/ocorrenciaLocal', async ( req, res ) => {
    ocorrenciaLocalController.getAll( req, res, client );
})

// checkada
router.get('/ocorrenciaLocal/searchOne', async ( req, res ) => {
    ocorrenciaLocalController.searchOne( req, res, client );
})

// checkada
router.post('/ocorrenciaLocal/addOne', async ( req, res ) => {
    ocorrenciaLocalController.addOne( req, res, client );
});

// ================= fim rotas ocorrenciaLocal =========================
// ================= rotas ocorrencia =========================

// checkada
router.get('/ocorrencia', async ( req, res ) => {
    ocorrenciaController.getAll( req, res, client );
})

// checkada
router.get('/ocorrencia/searchOne', async ( req, res ) => {
    ocorrenciaController.searchOne( req, res, client );
})

// checkada
router.post('/ocorrencia/addOne', async ( req, res ) => {
    ocorrenciaController.addOne( req, res, client );
});

// ================= fim rotas ocorrenciaLocal =========================

module.exports = router;