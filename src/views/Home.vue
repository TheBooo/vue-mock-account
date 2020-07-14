<template>
  <main class="home">
    <Login v-if="action === 'login'" />
    <SignUp v-if="action === 'signup'" />
    <button class="btn" @click="toggleAction">{{btnMessage}}</button>
  </main>
</template>

<script>
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default {
  name: "Home",
  components: { Login, SignUp },
  data() {
    return {
      action: "login",
      btnMessage: "Еще нет аккаунта? Зарегистрируйтесь"
    };
  },
  methods: {
    toggleAction() {
      if (this.action === "login") {
        this.action = "signup";
        this.btnMessage = "Авторизация";
      } else {
        this.action = "login";
        this.btnMessage = "Еще нет аккаунта? Зарегистрируйтесь";
      }
    }
  }
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
button {
  background: none;
  outline: none;
}
button:hover {
  background: none;
  color: var(--accent);
}
</style>
