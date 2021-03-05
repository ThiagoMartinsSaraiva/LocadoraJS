<template>
  <div>
    <h1>Bem-vindo à locadora!</h1>
    {{ isLoggedIn }} - {{ user }} - {{ token }}
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
  created() {
    this.$store.dispatch('login')
    this.user = this.$store.state.user
    this.token = this.$store.state.token
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
  }
}
</script>

<style lang="scss"></style>
