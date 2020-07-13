<template>
  <main class="home">
    <Login />
  </main>
</template>

<script>
import Login from "../components/Login";

export default {
  name: "Home",
  components: { Login }
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
