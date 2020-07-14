<template>
  <form v-on:submit.prevent="submitForm">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="email" v-model="email" placeholder="email" />
    <input type="text" v-model="username" placeholder="имя пользователя" />
    <input type="password" v-model="password" placeholder="пароль" />
    <input type="password" v-model="repeatPassword" placeholder="повторите пароль" />
    <button class="btn btn-login">Зарегистрироваться</button>
  </form>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      repeatPassword: ""
    };
  }
};
</script>

<style scoped>
</style>