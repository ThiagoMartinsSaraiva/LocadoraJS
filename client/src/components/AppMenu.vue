'<template>
  <div class="menu-container">
    <div v-if="isLoggedIn" class="menu-container__app-items">
      <router-link to="/movies" class="menu-item">Movies</router-link>
    </div>
    <div class="menu-container__action-items">
      <router-link to="/" class="menu-item">Home</router-link>
      <router-link to="/login" class="menu-item">Sign in</router-link>
      <button v-if="isLoggedIn" type="button" class="menu-item" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped>
  .menu-container {
    display: flex;
    padding: 20px 30px;
    background-color: #333;
    justify-content: flex-end;
    gap: 20px; 

    &__app-items {
      flex: 1;
    }

    &__action-items, &__app-items {
      display: flex;
      align-items: center;
      gap: 13px;
    }

    .menu-item {
      color: white;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>