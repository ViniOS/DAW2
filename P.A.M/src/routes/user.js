const { PrismaClient } = require('@prisma/client')
const { Router } = require('express')
const router = Router()
const prisma = new PrismaClient()
const status = require('http-status')


router.get('/', async (req,res)=>{
    try{
        const user = await prisma.user.findMany()

        if(!user){
            res.status(status[404]).send(`Lista não encontrada`)
            return
        }
        res.status(status.OK).send(user)
    }catch(error){
        res.status(status.BAD_GATEWAY).send(error)
    }
})


router.get('/:id', async (req,res)=>{
    const id = req.params

    try{

        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })

        if(!user){
            res.status(status[404]).send(`Usuario de ID:${id} não encontrado`)
            return
        }

        res.send(`Usuario ${user}`)
    }catch(error){
        res.status(status['502_MESSAGE']).send(error)
    }
})

router.post('/', async (req,res)=>{
    try{
        if(req.body != null){
            const { first_name, last_name, password } = req.body
            const newUser = await prisma.user.create({
                data:{
                    first_name: first_name,
                    last_name: last_name,
                    password: password
                }
            })
            res.status(status['201_MESSAGE']).send(`Usuario criado ${newUser}`)
        }else{
            res.status(status['406_MESSAGE']).send('Dados incorretos')
        }
    }catch(error){
        res.status(status['502_MESSAGE']).send(error)
    }
})

router.put('/:id', async (req,res)=>{
    const { id } = req.params
    const { first_name, last_name, password } = req.body

    try{
        const user = await prisma.user.findUnique({
            where:{
                id: Number(id)
            }
        })

        if(!user){
            res.status(status[404]).send(`Usuario de ID:${id} não encontrado`)
            return
        }

        const updateUser = await prisma.user.update({
            where:{
                id: user.Id
            },

            data:{
                first_name: first_name,
                last_name: last_name,
                password: password
            }
        })

        res.status(status[201]).send(`Usuario atualizado: ${updateUser}`)
    }catch(error){
        res.status(status[502]).send(error)
    }
})

router.delete('/:id', (req,res)=>{
    res.send(`Deleting User: ${req.params.id}`)
})

module.exports = router