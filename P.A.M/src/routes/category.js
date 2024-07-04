const { PrismaClient } = require('@prisma/client')
const { Router } = require('express')
const router = Router()
const prisma = new PrismaClient()
const status = require('http-status')

router.get('/', async (req,res)=>{

    try{
        const category = await prisma.category.findMany()

        if(!category){
            res.status(status.NOT_FOUND).send('Categorias não encontradas')
        }
        res.status(status.OK).send(category)

    }catch(erro){
        res.status(status.BAD_GATEWAY).send(error)
    }
    res.send('categoria rodando')
})

router.post('/', async (req,res)=>{
    try{
        if (req.body != null){
            const { description } = req.body
            const newCategory = await prisma.category.create({
                data:{
                    description: description
                }
            })
            res.status(status['201_MESSAGE']).send(`Usuario criado ${newCategory}`)
        }else{
            res.status(status.BAD_REQUEST).send('Dados incorretos')
        }

    }catch(erro){
        res.status(status.BAD_GATEWAY).send(error)
    }
    res.status(201).send("creating categoria")
})

router.put('/:id', async (req,res)=>{

    const { id } = req.params
    const { description } = req.body

    try{

        if(id != null){
            const category = await prisma.category.findUnique({
                where:{
                    id: Number(id)
                }
            })
    
            const updatecategory = await prisma.category.update({
                where:{
                    id: category.Id
                },
    
                data:{
                    description: description
                }
            })

            res.status(status.OK).send(`Categoria atualizada: ${updatecategory}`)
        }else{
            res.status(status.NOT_FOUND).send(`Categoria de ID:${id} não encontrado`)
            return
        }

    }catch(erro){
        res.status(status.BAD_REQUEST).send(error)
    }
    res.send(`Updating Category: ${req.params.id}`)
})

router.delete('/:id', async (req,res)=>{

    const { id } = req.params
    
    try{

        if(id != null){
            res.send(`Deleting User: ${req.params.id}`)
        }else{
            res.status(status.NOT_FOUND).send(`Categoria de ID:${id} não encontrado`)
            return
        }
        

    }catch(erro){
        res.status(status.BAD_GATEWAY).send(error)
    }
})

module.exports = router