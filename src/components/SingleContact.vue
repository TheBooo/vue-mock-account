<template>
  <div class="single-contact">
    <div class="contact contact-name">{{ contact.name }}</div>
    <div class="contact contact-phone">{{ contact.phone }}</div>
    <div class="contact contact-email">{{ contact.email }}</div>
    <div><button class="btn">edit</button><button class="btn">del</button></div>
  </div>
</template>

<script>
export default {
  name: "SingleContact",
  props: ["contact"],
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
