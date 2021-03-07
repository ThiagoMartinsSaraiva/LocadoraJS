<template>
  <div class="login-container">
    <div class="login-container__title">
      <h1>Sign in to LocadoraJS</h1>
    </div>
    <div class="login-container__form-container">
      <form @submit.prevent="login">
        <div class="input-container">
          <label>Username</label>
          <input v-model="form.username" type="text" placeholder="username">
        </div>
        <div class="input-container">
          <label>Password</label>
          <input v-model="form.password" type="password" placeholder="password">
        </div>
        <div class="button-container">
          <button>Sign in</button>
        </div>
      </form>
    </div>
  </div>
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
        this.$router.push({ name: 'movies' })
      })
      .catch(() => {
        //tratativa de erro futura
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &__title {
    text-align: center;
    color: #333;
    font-size: 2.3rem;
    font-weight: 600;
  }

  &__form-container {
    width: 90vw;
    max-width: 80%;
    display: flex;
    justify-content: center;
    justify-items: center;
    padding: 0 10px;  

    form {
      width: 100%;
      background-color: #333;
      border-radius: 5px;
      border: 1.5px solid #3337;
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding: 20px 30px;

      .input-container {
        display: flex;
        flex-direction: column;
        gap: 8px;

        label {
          color: white;
        }

        input {
          height: 38px;
          text-indent: 6px;
          border-radius: 3px;
          background-color: #fff;
          color: #333;
        }
      }

      .button-container {
        button {
          color: #fff;
          border-radius: 3px;
          width: 50%;
          height: 30px;
          background-color: #555;
        }
      }
    }
  }
}
</style>