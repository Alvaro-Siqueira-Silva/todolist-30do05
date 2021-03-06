module.exports = (app)=>{
    app.post('/atividades', async(req,res)=>{
        var dados = req.body

        const database = require('../config/database')()

        const atividades = require('../models/atividades')

        var gravar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.forma,
            disciplina:dados.disciplina,
            usuario:dados.id,
            instrucoes:dados.orientacoes,
        }).save()
        res.render('atividades.ejs',{nome:dados.nome, id:dados.id})
    })
}