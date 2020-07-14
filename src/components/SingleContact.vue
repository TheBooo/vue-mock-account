<template>
  <div class="single-contact">
    <div class="contact contact-name">{{ contact.name }}</div>
    <div class="contact contact-phone">{{ contact.phone }}</div>
    <div class="contact contact-email">{{ contact.email }}</div>
    <div class="container-btns">
      <button @click="editContact" class="btn"><PlaylistEdit /></button
      ><button @click="deleteContact(contact.id)" class="btn btn-delete">
        <Delete />
      </button>
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

//icons
import PlaylistEdit from "vue-material-design-icons/PlaylistEdit";
import Delete from "vue-material-design-icons/Delete";

export default {
  name: "SingleContact",
  components: { EditContact, PlaylistEdit, Delete },
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

.container-btns {
  display: flex;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
}
.btn-delete {
  background-color: var(--bg);
}
.btn-delete:hover {
  background-color: darkred;
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
