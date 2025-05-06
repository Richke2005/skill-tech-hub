const express = require('express');
const router = express.Router();
const User = require('../database/models/user');
const bcrypt = require('bcrypt');


// Rota de login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('📩 Login solicitado:', { email, password });

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('❌ Usuário não encontrado.');
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('🔍 Comparando senha:', { plain: password, hash: user.password, valid: isPasswordValid });

    if (!isPasswordValid) {
      console.log('❌ Senha inválida');
      return res.status(401).json({ message: 'Senha incorreta.' });
    }

    const { password: _, ...userWithoutPassword } = user.toObject();
    console.log('✅ Login bem-sucedido:', userWithoutPassword);
    res.status(200).json(userWithoutPassword);
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota de redefinição de senha
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
    console.error('Erro ao atualizar senha:', error);
    res.status(500).json({ message: 'Erro ao atualizar senha.' });
  }
});

// Rota de registro de usuário
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'E-mail e senha são obrigatórios.' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'E-mail já cadastrado.' });
    }

    const newUser = new User({ email, password });
    const createdDoc = await newUser.save();

    const { password: _, ...userWithoutPassword } = createdDoc.toObject();
    res.status(201).json({ message: 'Usuário criado com sucesso!', user: userWithoutPassword });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

module.exports = router;



/*const express = require('express');
const router = express.Router();
const User = require('../database/models/user'); // modelo de usuário
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'email or password incorrect' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'email or password incorrect' });

    res.json({ message: 'Login bem-sucedido', user });
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor.' });
  }
});*/

/*module.exports = router;
// Rota para redefinir senha com base no e-mail
/*router.post('/reset-password', async (req, res) => {
  console.log('Requisição recebida:', req.body);
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado.' });

    // Criptografa a nova senha antes de salvar
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Senha atualizada com sucesso!' });
  } catch (err) {
    console.error('Erro ao redefinir senha:', err);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

module.exports = router;*/
