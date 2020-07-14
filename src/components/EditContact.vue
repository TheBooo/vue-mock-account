<template>
  <div class="overlay">
    <form class="overlay-content" v-on:submit.prevent="save">
      <img alt="Vue logo" src="../assets/logo.png" />
      <div>Изменить контакт</div>
      <div v-if="showNotification === true" class="notification">
        {{ notification }}
      </div>
      <input
        type="text"
        v-model="editContact.name"
        placeholder="Имя"
        required
      />
      <input type="text" v-model="editContact.phone" placeholder="Телефон" />
      <input type="email" v-model="editContact.email" placeholder="Email" />
      <button @click="save" type="button" class="btn btn-login">
        Сохранить
      </button>
      <button @click="close" type="button" class="btn btn-login">
        Отмена
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EditContact",
  props: ["contact"],
  data() {
    return {
      editContact: this.contact,
      notification: "",
      showNotification: false,
    };
  },
  methods: {
    ...mapActions(["updateContact"]),
    save() {
      this.updateContact(this.editContact);
      this.close();
    },
    close() {
      this.$emit("closeForm");
    },
  },
};
</script>

<style></style>
