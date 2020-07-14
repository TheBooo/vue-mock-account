<template>
  <form v-on:submit.prevent="submitForm">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="showNotification === true" class="notification">
      {{ notification }}
    </div>
    <input type="email" v-model="email" placeholder="Email" required />
    <input
      type="text"
      v-model="username"
      placeholder="Имя пользователя"
      required
    />
    <input type="password" v-model="password" placeholder="Пароль" required />
    <input
      type="password"
      v-model="repeatPassword"
      placeholder="Повторите пароль"
      required
    />
    <button class="btn btn-login">Зарегистрироваться</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
      notification: "",
      showNotification: false,
    };
  },
  methods: {
    async submitForm() {
      // здесь анимация загрузки
      this.notification = "загрузка...";
      this.showNotification = true;

      //проверка совпадения паролей
      if (this.repeatPassword === this.password) {
        //ajax запросы
        try {
          //Далее много проверок, которые должны быть на бэке

          // проверка человека с таким именем
          const response = await axios.get(
            `http://localhost:3000/users?username=${this.username}`
          );
          const data = response.data;
          if (data.length === 0) {
            //если такого имени нет, регистрация
            const response = await axios.post("http://localhost:3000/users", {
              email: this.email,
              username: this.username,
              password: this.password,
            });

            //если успешно сохраняем токен
            if (response.status === 201) {
              sessionStorage.setItem("user", this.username);
              this.$router.push("/contacts");
            } else {
              this.notification = "Что-то пошло не так";
            }
          } else {
            //если такое имя уже есть
            this.notification = "Человек с таким именем уже зарегистрирован";
          }
        } catch (error) {
          this.notification = "Что-то пошло не так";
        }
        //
      } else {
        this.notification = "Пароли не совпадают";
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
