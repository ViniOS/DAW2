const { Router } = require('express')
const router = Router()

router.get('/', (req,res)=>{
    res.send('categoria rodando')
})

router.post('/', (req,res)=>{
    res.status(201).send("creating categoria")
})

router.put('/:id',(req,res)=>{
    res.send(`Updating Category: ${req.params.id}`)
})

router.delete('/:id',(req,res)=>{
    res.send(`Deleting Category: ${req.params.id}`)
})

module.exports = router