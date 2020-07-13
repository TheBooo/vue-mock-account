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
</style>
