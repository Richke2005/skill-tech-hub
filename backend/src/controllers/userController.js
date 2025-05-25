const Controller = require("./controller.js");
const UserService = require("../services/userServices.js");
const mongoose = require("mongoose");


const Usuario = require('../database/models/user.js'); 
const bcrypt = require('bcrypt');

/*--------------------------------*/

/*--------------------------------*/
const userService = new UserService();
/*-----------------------------------*/

/*-----------------------------------*/
class UserController extends Controller{
    constructor(){
        super(userService);
    }

    async getUsersBySearch(req, res){
        try{
            const query = req.query;
            const data = await userService.searchUsersBySearch(query);
            if(data.length === 0) 
                return res.status(404).send({message: "No user found"});
            return res.status(200).send(data);
        }catch(err){
            return res.status(400).send({message: err.message});
        }
     
    }

    async getCursesByUserId(req, res) {
        try {
            // Certifique-se de que 'Curse' é o nome do seu modelo de curso em Mongoose
            const user = await Usuario.findById(req.params.id).populate('curses');

            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            // Garante que 'user.curses' é um array, mesmo que vazio
            const userCurses = user.curses || []; // Deve ser um array populado ou vazio

            // Retorna os cursos. Se não houver cursos, retorna um array vazio.
            return res.status(200).json(userCurses);

        } catch (err) {
            console.error("Erro ao buscar cursos do usuário:", err);
            // IMPORTANTE: Sempre envie uma resposta em caso de erro!
            return res.status(500).json({ message: 'Erro interno do servidor ao buscar cursos.' });
        }
    }


    /*async getCursesByUserId(req, res){
        try{
            const userId = req.params.id;
            const data = await userService.searchCursesByUserId(userId);
            if(data.length === 0) 
                return res.status(404).send({message: "No User founded with this Id"});
            return res.status(200).send(data);
        }catch(err){
            return res.status(400).send({message: err.message});
        }
    }*/
//===============================================================================
async createUser(req, res) {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const erros = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ message: 'Erro de validação.', erros });
    }

    console.error(err);
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
}

async registerCourse(req, res) {
  try {
    const id = req.params.id;
    const { curses } = req.body;

    if (!Array.isArray(curses) || curses.length === 0) {
      return res.status(400).json({ message: 'Lista de cursos inválida.' });
    }

    // Garante que todos os IDs recebidos sejam convertidos para ObjectId
    const objectIdList = curses.map(cid => new mongoose.Types.ObjectId(cid));

    const updated = await Usuario.findByIdAndUpdate(
      id,
      { $addToSet: { curses: { $each: objectIdList } } }, // evita duplicação
      { new: true }
    ).populate("curses");

    if (!updated) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    return res.status(200).json({ message: "Curso cadastrado com sucesso.", user: updated });
  } catch (err) {
    console.error("Erro ao cadastrar curso:", err);
    return res.status(500).json({ message: "Erro interno ao cadastrar cursos." });
  }
}





//===============================================================================
    /*async redefinirSenha(req, res) {
        console.log("Função redefinirSenha chamada"); // Adicione esta linha
        const { email, password } = req.body;
        console.log(`req.body: ${JSON.stringify(req.body)}`);
        try {
            const usuario = await Usuario.findOne({ email }).catch(err => {
                console.error(`Erro ao buscar usuário: ${err}`);
            });
            console.log(`Usuário encontrado: ${usuario}`);
            if (!usuario) {
                return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
            }

            // Hash da nova senha
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(`Senha criptografada: ${hashedPassword}`);
            // Atualize a senha do usuário no banco de dados
            usuario.password = hashedPassword;
            await usuario.save().catch(err => {
                console.error(`Erro ao salvar usuário: ${err}`);
            });
            console.log("Senha atualizada com sucesso");
            res.status(200).json({ mensagem: 'Senha redefinida com sucesso.' });
        } catch (err) {
            console.log(err);
            res.status(500).json({ mensagem: 'Ocorreu um erro ao redefinir a senha.' });
        }
    }

    
    
/*-----------------------------------------*/

    // Função para mudar a senha do usuário
   /* async changePassword(req, res) {
        const { email, newPassword, confirmPassword } = req.body;
    
        if (!email || !newPassword || !confirmPassword) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }
    
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'As senhas não coincidem.' });
        }
    
        try {
            const user = await Usuario.findOne({ email });
    
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }
    
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
            await user.save();
    
            res.status(200).json({ message: 'Senha alterada com sucesso!' });
        } catch (error) {
            console.error('Erro ao alterar a senha:', error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
    
    
      /*-----------------------------------------*/

/*-----------------------------------------*/
      
    /*-----------------------------------------*/
}

















module.exports = UserController;




/*async redefinirSenha(req, res) {
    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
        }

        // Hash da nova senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Atualize a senha do usuário no banco de dados
        usuario.password = hashedPassword;
        await usuario.save();

        res.status(200).json({ mensagem: 'Senha redefinida com sucesso.' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ mensagem: 'Ocorreu um erro ao redefinir a senha.' });
    }
}*/