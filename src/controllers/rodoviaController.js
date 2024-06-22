const rodovia = require('../models/rodoviaModel');

class rodoviaController {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('rodovia').countDocuments();
    
            console.log(contador);
            if(contador > 1) {
                res.status(201).send(`${contador} rodovias catalogados.`)
            } else {
                res.status(201).send(`${contador} rodovias catalogado.`)
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codRodovia } = req.body;
    
            const rodovia = await client.db('test_db').collection('rodovia').findOne({ 'codRodovia': codRodovia });
    
            if(!rodovia) {
                console.log(`Objeto ${nome} não encontrado!`);
                res.status(201).send(`Objeto ${nome} não encontrado!`)
            } else {
                console.log(rodovia);
                res.status(201).send(
                    `Objeto ${nome} encontrado!`
                )
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { codRodovia, nome } = req.body;
            const newRodovia = new rodovia({ codRodovia, nome });
            const response = await client.db('test_db').collection('rodovia').insertOne(newRodovia);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados rodovia!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
}

module.exports = new rodoviaController();