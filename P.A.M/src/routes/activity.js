const { Router } = require("express");
const router = Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const status = require("http-status");

// GET /activities - Retorna todas as atividades
router.get("/", async (req, res) => {
  try {
    const activities = await prisma.activity.findMany();
    return res.status(status.OK).send(activities);
  } catch (error) {
    return res.send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    if (req.body) {
      const { description, dt_inicial, dt_final, category_id, user_id } = req.body;

      console.log("Received request body:", req.body);

      // Convert date strings to Date objects
      const dtInicial = new Date(dt_inicial);
      const dtFinal = new Date(dt_final);

      // Parse IDs to numbers
      const categoryId = Number(category_id);
      const userId = Number(user_id);

      // Create the activity with Prisma
      const newActivity = await prisma.activity.create({
        data: {
          description: description,
          dt_inicial: dtInicial,
          dt_final: dtFinal,
          category: { connect: { Id: categoryId } }, // Connect to existing category
          user_id: { connect: { Id: userId } }
        },
      });

      console.log("Created new activity:", newActivity);

      return res.status(status.CREATED).send(newActivity);
    } else {
      return res.status(status.BAD_REQUEST).send("Dados incorretos");
    }
  } catch (error) {
    console.error("Erro ao criar atividade:", error);
    return res.status(status.INTERNAL_SERVER_ERROR).send(error.message);
  }
});

// POST /activities - Cria uma nova atividade
// router.post('/', async (req, res) => {
//   try {
//     console.log(req.body);

//     const { description, dt_inicial, dt_final, category_id, user_id } = req.body;

//     const category_idInt = Number(category_id);
//     const user_idInt = Number(user_id);

//     const newActivity = await prisma.activity.create({
//       data: {
//         description: description,
//         dt_inicial: new Date(dt_inicial),
//         dt_final: new Date(dt_final),
//         category_id: category_idInt,
//         user_id: user_idInt
//       },
//     });

//     return res.status(status.CREATED).send(newActivity);
//   } catch (error) {
//     console.log(error);
//     return res.status(status.BAD_GATEWAY).send(error.message);
//   }
// });

// PUT /activities/:id - Atualiza uma atividade existente
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { description, dt_inicial, dt_final, category_id, user_id } = req.body;

  const category_idInt = Number(category_id);
  const user_idInt = Number(user_id);

  try {
    const updatedActivity = await prisma.activity.update({
      where: { Id: Number(id) },
      data: {
        description: description,
        dt_inicial: new Date(dt_inicial),
        dt_final: new Date(dt_final),
        category_id: category_idInt,
        user_id: user_idInt,
      },
    });

    return res.status(status.OK).send(updatedActivity);
  } catch (error) {
    res.status(status.BAD_GATEWAY).send(error.message);
  }
});

// DELETE /activities/:id - Deleta uma atividade existente
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.activity.delete({
      where: { Id: Number(id) },
    });

    res.status(status.OK).send(`Atividade de ID:${id} deletada com sucesso`);
  } catch (error) {
    res.status(status.BAD_GATEWAY).send(error.message);
  }
});

module.exports = router;
