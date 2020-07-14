<template>
  <header class="header">
    <button @click="exit" class="btn btn-exit">exit</button>

    <img alt="Vue logo" src="../assets/logo.png" class="logo" />
    <h1>Контакты</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
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
  float: right;
}
</style>
