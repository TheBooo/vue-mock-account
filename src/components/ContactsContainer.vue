<template>
  <div class="contacts-container">
    <form v-on:submit.prevent>
      <input type="text" placeholder="Введите имя" v-model="search" />
    </form>
    <SingleContact
      v-for="contact in filteredContacts"
      :key="contact.id"
      v-bind:contact="contact"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import SingleContact from "./SingleContact";

export default {
  name: "ContactsContainer",
  components: { SingleContact },
  computed: {
    ...mapGetters(["allContacts"]),
    // поиск контакта по имени
    filteredContacts() {
      return this.allContacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(["fetchContacts"]),
  },
  created() {
    this.fetchContacts();
  },
};
</script>

<style scoped>
.contacts-container {
  width: 100%;
}
form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-shadow: none;
}
input {
  font-size: 1rem;
  border-radius: 25px;
  height: 50px;
  outline: none;
}
</style>
