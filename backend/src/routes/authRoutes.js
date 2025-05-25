const express = require('express');
const router = express.Router();
const User = require('../database/models/user');
const bcrypt = require('bcrypt');


// Rota de login (Combinando sua lógica para usuários antigos e novos)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('📩 Login solicitado:', { email, password }); // Seu log

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('❌ Usuário não encontrado.');
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    let isPasswordValid = false;

    try {
      if (user.password.startsWith('$2b$')) {
        // Senha criptografada
        isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('🔐 Verificando senha com Bcrypt'); // Seu log
      } else {
        // Senha texto puro (para usuários antigos)
        isPasswordValid = password === user.password;
        console.log('🔓 Verificando senha como texto puro'); // Seu log
      }
    } catch (e) {
      console.error('Erro ao comparar senha:', e);
    }

    console.log('🔍 Comparando senha:', {
      plain: password,
      hash: user.password,
      valid: isPasswordValid
    }); // Seu log

    if (!isPasswordValid) {
      console.log('❌ Senha inválida');
      return res.status(401).json({ message: 'Senha incorreta.' });
    }

    const { password: _, ...userWithoutPassword } = user.toObject();
    console.log('✅ Enviando resposta:', userWithoutPassword); // Seu log
    console.log('✅ Login bem-sucedido:', userWithoutPassword); // Seu log
    res.status(200).json(userWithoutPassword);
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota de redefinição de senha (Usando a funcionalidade do seu colaborador com a sua otimização)
router.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ message: 'E-mail e nova senha são obrigatórios.' });
  }

  try {
    const user = await User.findOne({ email });
    console.log('👤 Usuário encontrado:', user); // Seu log

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    // Preferindo o User.updateOne da sua versão que é mais direto para atualizações de um campo
    await User.updateOne({ email }, { $set: { password: hashedPassword } });

    res.json({ message: 'Senha atualizada com sucesso.' });
  } catch (error) {
    console.error('Erro ao atualizar senha:', error);
    res.status(500).json({ message: 'Erro ao atualizar senha.' });
  }
});

// Rota de registro de usuário (Usando sua versão aprimorada com campos adicionais e validação)
router.post('/register', async (req, res) => {
  const { nome, email, password, cpf } = req.body; // Seus campos adicionais

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'E-mail já cadastrado.' });
    }

    const newUser = new User({
      nome,
      email,
      password,
      cpf,
      areas_of_interest: [],
      curses: [],
      social_midias: [],
      enterprise: { name: '' },
      address: { street: '' },
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png' // Sua imagem padrão
    });

    const createdDoc = await newUser.save();

    const { password: _, ...userWithoutPassword } = createdDoc.toObject();
    console.log('✅ Enviando resposta:', userWithoutPassword); // Seu log

    res.status(201).json({ message: 'Usuário criado com sucesso!', user: userWithoutPassword });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);

    if (error.name === 'ValidationError') { // Sua validação de erros
      const mensagens = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ message: 'Erro de validação.', erros: mensagens });
    }

    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para buscar cursos do usuário por ID (Sua nova rota)
router.get('/users/:id/curses', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('curses');
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado.' });

    res.json([{ curses: user.curses }]);
  } catch (err) {
    console.error('Erro ao buscar cursos do usuário:', err);
    res.status(500).json({ message: 'Erro ao buscar cursos do usuário.' });
  }
});

module.exports = router;