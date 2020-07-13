<template>
  <form v-on:submit.prevent="submitNote">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="email" v-model="email" placeholder="email" />
    <input type="password" v-model="password" placeholder="password" />
    <button class="btn btn-login">Login</button>
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
form {
  width: 60%;
  max-width: 1160px;
  min-height: 60%;
  padding: 1rem;
  background-color: var(--bg-accent);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
input {
  padding: 1rem;
  margin: 0.2rem;
  font-size: 1.4rem;
  width: 60%;
  border-radius: var(--main-border-radius);
  border: none;
  border-radius: 0.5rem;
  background-color: var(--text-color);
}
input::placeholder {
  color: var(--bg);
}

img {
  height: 5rem;
  margin-bottom: 3rem;
}

.btn-login {
  width: 60%;
  border-radius: 0.5rem;
  font-size: 1.4rem;
}

@media (max-width: 992px) {
  form {
    width: 90%;
  }
  input {
    width: 100%;
  }
  .btn-login {
    width: 100%;
  }
}
</style>