<template>
  <div>
    <Header />
    <div class="btn-container">
      <button @click="addContact" class="btn">Добавить контакт</button>
    </div>
    <AddContact v-if="showForm === true" v-on:closeForm="closeForm" />
    <main>
      <ContactsContainer />
    </main>
  </div>
</template>

<script>
import ContactsContainer from "../components/ContactsContainer";
import Header from "../components/Header";
import AddContact from "../components/AddContact";

export default {
  components: { ContactsContainer, Header, AddContact },
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    addContact() {
      this.showForm = true;
    },
    closeForm() {
      this.showForm = false;
    },
  },
  created() {
    // проверка токена авторизации, в теории - с запросом на бэк
    sessionStorage.getItem("user") ? "" : this.$router.push("/");
  },
};
</script>

<style scoped>
main {
  margin: 2rem auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  width: 70%;
  max-width: 1160px;
  background-color: var(--bg-accent);
}
.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

@media (max-width: 992px) {
  main {
    width: 100%;
  }
}
</style>
