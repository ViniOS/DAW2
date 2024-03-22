const { Router } = require('express')
const router = Router()


router.get('/', (req,res)=>{
    res.send('user rodando')
})

router.post('/', (req,res)=>{
    res.status(201).send('Creating User')
})

router.put('/:id', (req,res)=>{
    res.send(`Updating User: ${req.params.id}`)
})

router.delete('/:id', (req,res)=>{
    res.send(`Deleting User: ${req.params.id}`)
})

module.exports = router