<template>
  <div>
    <Header />
    <main>
      <Contacts />
    </main>
  </div>
</template>

<script>
import Contacts from "../components/Contacts";
import Header from "../components/Header";

export default {
  components: { Contacts, Header },

  created() {
    // проверка токена авторизации, в теории - с запросом на бэк
    sessionStorage.getItem("user") ? "" : this.$router.push("/");
  },
};
</script>

<style scoped>
main {
  display: flex;
  margin: 2rem auto;
  border: 1px solid white;
  width: 70%;
  max-width: 1160px;
}
</style>
