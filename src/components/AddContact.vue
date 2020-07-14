<template>
  <div class="overlay">
    <form class="overlay-content" v-on:submit.prevent="save">
      <img alt="Vue logo" src="../assets/logo.png" />
      <div v-if="showNotification === true" class="notification">
        {{ notification }}
      </div>
      <input type="text" v-model="contact.name" placeholder="Имя" required />
      <input type="text" v-model="contact.phone" placeholder="Телефон" />
      <input type="email" v-model="contact.email" placeholder="Email" />
      <button @click="save" type="button" class="btn btn-login">
        Сохранить
      </button>
      <button @click="cancel" type="button" class="btn btn-login">
        Отмена
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddContact",
  data() {
    return {
      contact: {
        name: "",
        phone: "",
        email: "",
      },
      notification: "",
      showNotification: false,
    };
  },
  methods: {
    ...mapActions(["addContact"]),
    save() {
      // проверка пустого имени
      if (this.contact.name.trim()) {
        this.addContact(this.contact);
        this.cancel();
      } else {
        this.notification = "Пожалуйста введите имя";
        this.showNotification = true;
      }
    },
    cancel() {
      this.$emit("cancelForm");
    },
  },
};
</script>

<style scoped></style>
