<template>
  <div class="usuarios">
    <h2>Lista de Usuários</h2>
    
    <div v-if="loading" class="loading">
      Carregando usuários...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else>
      <table class="usuarios-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nome }}</td>
            <td>{{ usuario.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'Usuarios',
  data() {
    return {
      usuarios: [],
      loading: true,
      error: ''
    }
  },
  async mounted() {
    try {
      const response = await api.get('/usuarios', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      this.usuarios = response.data
    } catch (err) {
      this.error = err.response?.data?.error || 'Erro ao carregar usuários'
      if (err.response?.status === 401) {
        localStorage.removeItem('token')
        this.$router.push('/login')
      }
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.usuarios {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.loading {
  text-align: center;
  color: #666;
  padding: 20px;
}

.error {
  color: #ff4444;
  text-align: center;
  padding: 20px;
}

.usuarios-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.usuarios-table th,
.usuarios-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.usuarios-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.usuarios-table tr:hover {
  background-color: #f9f9f9;
}
</style> 