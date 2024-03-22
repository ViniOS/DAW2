const { Router } = require('express')
const router = Router()

router.get('/', (req,res)=>{
    res.send('atividade rodando')
})

router.post('/', (req,res)=>{
    res.status(201).send('Creating Activity')
})

router.put('/:id', (req,res)=>{
    res.status(200).send(`Updating Activity: ${req.params.id}`)
})

router.delete('/:id', (req,res)=>{
    res.status(200).send(`Delete Activity: ${req.params.id}`)
})

module.exports = router