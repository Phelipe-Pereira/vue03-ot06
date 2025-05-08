const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');

router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;
  const hash = await bcrypt.hash(senha, 10);
  const usuario = await Usuario.create({ nome, email, senha: hash });
  res.status(201).json(usuario);
});

router.get('/', async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
});

router.put('/:id', async (req, res) => {
  const { nome, email } = req.body;
  await Usuario.update({ nome, email }, { where: { id: req.params.id } });
  res.sendStatus(204);
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario || !await bcrypt.compare(senha, usuario.senha)) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = jwt.sign({ id: usuario.id }, 'segredo', { expiresIn: '1h' });
  res.json({ token });
});

router.get('/protegido', auth, (req, res) => {
  res.json({ mensagem: 'Acesso autorizado!' });
});

module.exports = router;