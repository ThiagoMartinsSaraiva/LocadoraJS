<template>
  <div>
    <h1>Bem-vindo à locadora!</h1>
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
  }
}
</script>

<style lang="scss"></style>
