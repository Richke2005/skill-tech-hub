const Controller = require("./controller.js");
const UserService = require("../services/userServices.js");



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

    async getCursesByUserId(req, res){
        try{
            const userId = req.params.id;
            const data = await userService.searchCursesByUserId(userId);
            if(data.length === 0) 
                return res.status(404).send({message: "No User founded with this Id"});
            return res.status(200).send(data);
        }catch(err){
            return res.status(400).send({message: err.message});
        }
    }


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
    async changePassword(req, res) {
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