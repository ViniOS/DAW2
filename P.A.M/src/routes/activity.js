const { Router } = require('express')
const router = Router()

router.get('/', (req,res)=>{
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoints para obter atividades.'
    
    res.send('atividade rodando')
})

router.post('/', (req,res)=>{
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint para criar uma atividade.'
    /* #swagger.responses[201] = { 
        schema: { $ref: "#/definitions/User" },
        description: 'atividade criado.' 
    } */
    res.status(201).send('Creating Activity')
})

router.put('/:id', (req,res)=>{
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint para atualizar um usuário.'
    // #swagger.parameters['id'] = { description: 'ID do usuário.' }

    res.status(200).send(`Updating Activity: ${req.params.id}`)
})

router.delete('/:id', (req,res)=>{
    res.status(200).send(`Delete Activity: ${req.params.id}`)
})

module.exports = router