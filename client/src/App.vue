<template>
  <div>
    <div>
      <div v-if="isLoggedIn">
        <router-link to="/movies">Movies</router-link>
      </div>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Sign in</router-link>
        <button v-if="isLoggedIn" type="button" @click="logout">Logout</button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user: {},
      token: null
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  }
}
</script>

<style lang="scss"></style>
