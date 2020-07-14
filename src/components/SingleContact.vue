<template>
  <div class="single-contact">
    <div class="contact contact-name">{{ contact.name }}</div>
    <div class="contact contact-phone">{{ contact.phone }}</div>
    <div class="contact contact-email">{{ contact.email }}</div>
    <div>
      <button @click="editContact" class="btn">edit</button
      ><button @click="deleteContact(contact.id)" class="btn">del</button>
    </div>
    <!-- edit component -->
    <EditContact
      v-bind:contact="contact"
      v-if="this.showEditForm === true"
      v-on:closeForm="closeForm"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import EditContact from "./EditContact";

export default {
  name: "SingleContact",
  components: { EditContact },
  props: ["contact"],
  data() {
    return {
      showEditForm: false,
    };
  },
  methods: {
    ...mapActions(["deleteContact"]),

    editContact() {
      this.showEditForm = true; // дисплей компонента редактирования
    },
    closeForm() {
      this.showEditForm = false;
    },
  },
};
</script>

<style scoped>
.single-contact {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  margin: 1rem 0rem;
  padding: 1rem;
  color: var(--text-color);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.contact {
  margin: 0.2rem 1rem;
}
.contact-name {
  color: var(--accent);
  font-size: 2rem;
}

@media (max-width: 992px) {
  .single-contact {
    font-size: 1.1rem;
  }
  .contact-name {
    font-size: 1.4rem;
  }
}
</style>
