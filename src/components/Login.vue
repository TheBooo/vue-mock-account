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
        console.log(data);
        // ---- мок проверки, все это должно быть на бэке ----
        //если нет такого пользователя
        if (data.length === 0) {
          this.notification = "Неправильный логин или пароль";
          this.showNotification = true;
        } else if (data[0].password === this.password) {
          //если пользователь есть и пароль правильный переход к контактам
          this.$router.push("/contacts");
        } else {
          //если пароль неправильный
          this.notification = "Неправильный логин или пароль";
          this.showNotification = true;
        }
      } catch (error) {
        this.notification = `sorry, something went wrong`;
        this.showNotification = true;
      }
    },
  },
};
</script>

<style scoped>
img {
  height: 5rem;
  margin-bottom: 3rem;
}
</style>
