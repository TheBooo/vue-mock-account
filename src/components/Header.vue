<template>
  <header class="header">
    <img alt="Vue logo" src="../assets/logo.png" class="logo" />
    <h1>Контакты</h1>
    <button @click="exit" class="btn btn-exit">Выйти<Logout /></button>
  </header>
</template>

<script>
import Logout from "vue-material-design-icons/Logout";

export default {
  name: "Header",
  components: { Logout },
  methods: {
    exit() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.header {
  background-color: var(--bg-accent);
  color: var(--accent);
  padding: 0.5rem;
  text-align: center;
}
.logo {
  max-height: 10vh;
  width: auto;
}
.btn-exit {
  position: absolute;
  right: 5px;
  top: 5px;
  display: flex;
  align-items: center;
}
</style>
