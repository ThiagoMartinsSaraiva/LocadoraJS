<template>
  <h1>Bem-vindo à locadora!</h1>
  <login />
  <movies-list />
  <movie-form />
</template>

<script>
import Login from './views/Login'
import MoviesList from './views/MoviesList'
import MovieForm from './views/MovieForm'
export default {
  components: {
    Login,
    MoviesList,
    MovieForm,
  }
}
</script>

<style lang="scss"></style>
