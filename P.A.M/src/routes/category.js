const { PrismaClient } = require('@prisma/client');
const { Router } = require('express');
const router = Router();
const prisma = new PrismaClient();
const status = require('http-status');

router.get('/', async (req, res) => {
    try {
        const category = await prisma.category.findMany();

        if (!category || category.length === 0) {
            return res.status(status.NOT_FOUND).send('Categorias não encontradas');
        }
        
        res.status(status.OK).send(category);
    } catch (error) {
        res.status(status.BAD_GATEWAY).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        if (req.body) {
            const { description } = req.body;
            const newCategory = await prisma.category.create({
                data: {
                    description: description
                }
            });
            return res.status(status.CREATED).send(newCategory);
        } else {
            return res.status(status.BAD_REQUEST).send('Dados incorretos');
        }
    } catch (error) {
        return res.status(status.BAD_GATEWAY).send(error.message);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        if (id) {
            const category = await prisma.category.findUnique({
                where: {
                    id: Number(id)
                }
            });

            if (!category) {
                return res.status(status.NOT_FOUND).send(`Categoria de ID:${id} não encontrado`);
            }

            const updateCategory = await prisma.category.update({
                where: {
                    id: Number(id)
                },
                data: {
                    description: description
                }
            });

            return res.status(status.OK).send(`Categoria atualizada: ${updateCategory}`);
        } else {
            return res.status(status.NOT_FOUND).send(`Categoria de ID:${id} não encontrado`);
        }
    } catch (error) {
        return res.status(status.BAD_REQUEST).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        if (id) {
            await prisma.category.delete({
                where: {
                    id: Number(id)
                }
            });
            return res.send(`Categoria de ID:${id} deletada com sucesso`);
        } else {
            return res.status(status.NOT_FOUND).send(`Categoria de ID:${id} não encontrado`);
        }
    } catch (error) {
        return res.status(status.BAD_GATEWAY).send(error.message);
    }
});

module.exports = router;
