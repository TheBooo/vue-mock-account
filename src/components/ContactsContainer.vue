<template>
  <div class="contacts-container">
    <SingleContact
      v-for="contact in allContacts"
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
  computed: mapGetters(["allContacts"]),
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
</style>
