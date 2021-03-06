<template>
  <article>
    <h1>Login page</h1>
    <div>
      <form @submit.prevent="login">
        <div>
          <input v-model="form.username" type="text" placeholder="username">
        </div>
        <div>
          <input v-model="form.password" type="password" placeholder="password">
        </div>
        <div>
          <button>Sign in</button>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
    }
  },
  methods: {
    login() {
      axios.post(`http://${window.location.hostname}:3001/users/login`, {
        ...this.form
      })
      .then(({ data }) => {
        const { id, username } = data.user
        this.$store.dispatch('login', { id, username })
      })
      .catch(() => {
        //tratativa de erro futura
      })
    },
  },
}
</script>

<style>
  
</style>