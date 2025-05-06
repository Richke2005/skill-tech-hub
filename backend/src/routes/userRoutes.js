const { Router } = require("express");
const UserController = require("../controllers/userController.js");

const router = Router();
const userController = new UserController();

/*-----------------------------------------------------------*/
const User = require('../database/models/user.js'); // modelo do usuário
/*-----------------------------------------------------------*/

router
.post("/skilltech/api/v1/users", (req, res) => userController.post(req, res))
.get("/skilltech/api/v1/users", (req, res) => userController.getAll(req, res))
.get("/skilltech/api/v1/users/search", (req, res) => userController.getUsersBySearch(req, res))
.get("/skilltech/api/v1/users/:id", (req, res) => userController.getById(req, res))
.get("/skilltech/api/v1/users/:id/curses", (req, res) => userController.getCursesByUserId(req, res))
.put("/skilltech/api/v1/users/:id", (req, res) => userController.update(req, res))
.delete("/skilltech/api/v1/users/:id", (req, res) => userController.delete(req, res));


/*-----------------------------------------------------------*/


router.post('/reset-password', async (req, res) => {
    const { email, newPassword } = req.body;
  
    if (!email || !newPassword) {
      return res.status(400).json({ message: 'E-mail e nova senha são obrigatórios.' });
    }
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
  
      res.json({ message: 'Senha atualizada com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar senha.' });
    }
  });
/*-----------------------------------------------------------*/


module.exports = router;










