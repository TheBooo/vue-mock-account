<template>
  <div class="overlay">
    <form class="overlay-content" v-on:submit.prevent="save">
      <div v-if="showNotification === true" class="notification">
        {{ notification }}
      </div>
      <input type="text" v-model="contact.name" placeholder="Имя" required />
      <input type="text" v-model="contact.phone" placeholder="Телефон" />
      <input type="email" v-model="contact.email" placeholder="Email" />
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
        this.close();
      } else {
        this.notification = "Пожалуйста введите имя";
        this.showNotification = true;
      }
    },
    close() {
      this.$emit("closeForm");
    },
  },
};
</script>

<style scoped></style>
