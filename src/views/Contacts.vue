<template>
  <div>
    <Header />
    <main>
      <ContactsContainer />
    </main>
  </div>
</template>

<script>
import ContactsContainer from "../components/ContactsContainer";
import Header from "../components/Header";

export default {
  components: { ContactsContainer, Header },

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
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  width: 70%;
  max-width: 1160px;
  background-color: var(--bg-accent);
}

@media (max-width: 992px) {
  main {
    width: 100%;
  }
}
</style>
