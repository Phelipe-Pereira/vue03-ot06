<template>
  <div>
    <h1>Usuários</h1>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">{{ usuario.nome }} - {{ usuario.email }}</li>
    </ul>
  </div>
</template>

<script>
import api from '@/services/api';
export default {
  data() {
    return { usuarios: [] };
  },
  async mounted() {
    const response = await api.get('/usuarios');
    this.usuarios = response.data;
  }
}
</script>