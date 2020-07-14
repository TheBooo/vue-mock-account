import axios from "axios";

const state = {
  contacts: [],
};

const getters = {
  allContacts: (state) => state.contacts,
};

const actions = {
  async fetchContacts({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("setContacts", response.data);
  },

  async addContact({ commit }, name, phone, email) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      { name, phone, email }
    );
    commit("newContact", response.data);
  },

  async deleteContact({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    commit("removeContact", id);
  },

  async updateContact({ commit }, updatedContact) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updatedContact.id}`,
      updatedContact
    );
    commit("updateContact", response.data);
  },
};

const mutations = {
  setContacts: (state, contacts) => (state.contacts = contacts),
  newContact: (state, contact) => state.contacts.unshift(contact),
  removeContact: (state, id) =>
    (state.contacts = state.contacts.filter((contact) => contact.id !== id)),
  updateContact: (state, updatedContact) => {
    state.contacts = state.contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
