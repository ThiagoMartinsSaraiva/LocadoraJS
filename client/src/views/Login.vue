<template>
  <article>
    <h1>Login page</h1>
    <div>
      <form @submit.prevent="login">
        <div>
          <input v-model="form.username" type="text" placeholder="username">
        </div>
        <div>
          <input v-model="form.password" type="text" placeholder="password">
        </div>
        <div>
          <button>Sign in</button>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
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
      this.$store.dispatch('login', { ...this.form })
    },
  },
}
</script>

<style>
  
</style>