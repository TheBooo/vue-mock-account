<template>
  <form v-on:submit.prevent="submitNote">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="email" v-model="email" placeholder="email" />
    <input type="password" v-model="password" placeholder="пароль" />
    <button class="btn btn-login">Войти</button>
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submitNote() {
      console.log("yo");
    }
  }
};
</script>

<style scoped>
img {
  height: 5rem;
  margin-bottom: 3rem;
}
</style>