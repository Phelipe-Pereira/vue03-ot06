<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <input 
          v-model="email" 
          type="email" 
          placeholder="Email" 
          required
          :class="{ 'error': error }"
        />
      </div>
      <div class="form-group">
        <input 
          v-model="senha" 
          type="password" 
          placeholder="Senha" 
          required
          :class="{ 'error': error }"
        />
      </div>
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
      <button type="submit" :disabled="loading">
        {{ loading ? 'Entrando...' : 'Entrar' }}
      </button>
    </form>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      senha: '',
      error: '',
      loading: false
    }
  },
  methods: {
    async login() {
      this.loading = true
      this.error = ''
      
      try {
        const response = await api.post('/usuarios/login', {
          email: this.email,
          senha: this.senha
        })
        
        localStorage.setItem('token', response.data.token)
        this.$router.push('/usuarios')
      } catch (err) {
        this.error = err.response?.data?.error || 'Erro ao fazer login'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

input.error {
  border-color: #ff4444;
}

.error-message {
  color: #ff4444;
  font-size: 14px;
}

button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  background-color: #a8d5c2;
  cursor: not-allowed;
}
</style> 