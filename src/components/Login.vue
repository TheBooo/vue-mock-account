<template>
  <form v-on:submit.prevent="submitForm">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="showNotification === true" class="notification">
      {{ notification }}
    </div>
    <input
      type="text"
      v-model="username"
      placeholder="Имя пользователя"
      required
    />
    <input type="password" v-model="password" placeholder="Пароль" required />

    <button class="btn btn-login">Войти</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      notification: "",
      showNotification: false,
    };
  },
  methods: {
    // ---- мок авторизация ----
    async submitForm() {
      // здесь анимация загрузки
      this.notification = "загрузка...";
      this.showNotification = true;

      //ajax запрос
      try {
        const response = await axios.get(
          `http://localhost:3000/users?username=${this.username}`
        );
        const data = response.data;
        // ---- мок проверки, все это должно быть на бэке ----
        //если нет такого пользователя
        if (data.length === 0) {
          this.notification = "Неправильный логин или пароль";
        } else if (data[0].password === this.password) {
          //если пользователь есть и пароль правильный переход к контактам
          this.$router.push("/contacts");

          //сохраняем данные в session storage, здесь должен был быть токен авторизации
          sessionStorage.setItem("user", data[0].username);
        } else {
          //если пароль неправильный
          this.notification = "Неправильный логин или пароль";
        }
      } catch (error) {
        this.notification = `Что-то пошло не так`;
      }
    },
  },
  created() {
    // здесь должна быть проверка токена авторизации
    sessionStorage.getItem("user") ? this.$router.push("/contacts") : "";
  },
};
</script>

<style scoped>
img {
  height: 5rem;
  margin-bottom: 3rem;
}
</style>
