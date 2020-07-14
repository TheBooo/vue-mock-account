<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --bg: #242526;
  --bg-accent: #003745;
  --accent: #3698b7;
  --text-color: #dadce1;
  --main-transition: all 500ms ease-in-out;
  --nav-width: calc(100vw * 0.8);
}

body {
  line-height: 1.4;
  letter-spacing: 0.1rem;
  background-color: var(--bg);
}
a {
  text-decoration: none;
}
form {
  width: 60%;
  max-width: 1160px;
  min-height: 60%;
  padding: 1rem;
  background-color: var(--bg-accent);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
input {
  padding: 1rem;
  margin: 0.2rem;
  font-size: 1.4rem;
  width: 60%;
  border-radius: var(--main-border-radius);
  border: none;
  border-radius: 0.5rem;
  background-color: var(--text-color);
}
input::placeholder {
  color: var(--bg);
}

.btn {
  margin: 0.2rem;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: var(--accent);
  color: var(--text-color);
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: var(--main-transition);
}
.btn:hover {
  background-color: var(--text-color);
  color: var(--bg);
}
.btn-login {
  width: 60%;
  border-radius: 0.5rem;
  font-size: 1.4rem;
}

.notification {
  color: var(--bg);
  font-size: 2rem;
  font-weight: 500;
  background-color: var(--accent);
  padding: 0rem 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
}

@media (max-width: 992px) {
  form {
    width: 90%;
  }
  input {
    width: 100%;
  }
  .btn-login {
    width: 100%;
  }
}
</style>
