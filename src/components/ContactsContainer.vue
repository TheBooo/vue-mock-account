<template>
  <div>
    <div v-for="contact in allContacts" :key="contact.id">{{ contact }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ContactsContainer",
  computed: mapGetters(["allContacts"]),
  methods: {
    ...mapActions(["fetchContacts"]),
  },
  created() {
    this.fetchContacts();
  },
};
</script>

<style scoped></style>
