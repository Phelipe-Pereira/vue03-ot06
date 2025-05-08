<template>
  <form @submit.prevent="login">
    <input v-model="email" placeholder="Email" />
    <input v-model="senha" placeholder="Senha" type="password" />
    <button type="submit">Entrar</button>
  </form>
</template>

<script>
import api from '@/services/api';
export default {
  data() {
    return { email: '', senha: '' };
  },
  methods: {
    async login() {
      const response = await api.post('/usuarios/login', {
        email: this.email,
        senha: this.senha,
      });
      localStorage.setItem('token', response.data.token);
      this.$router.push('/protegido');
    },
  },
};
</script>