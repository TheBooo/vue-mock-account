import axios from "axios";

const state = {
  contacts: [],
};

const getters = {
  allContacts: (state) => state.contacts,
};

const actions = {
  async fetchContacts({ commit }) {
    const response = await axios.get("http://localhost:3000/contacts");
    commit("setContacts", response.data);
  },

  async addContact({ commit }, newContact) {
    const response = await axios.post("http://localhost:3000/contacts", {
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
    });
    commit("newContact", response.data);
  },

  async deleteContact({ commit }, id) {
    await axios.delete(`http://localhost:3000/contacts/${id}`);

    commit("removeContact", id);
  },

  async updateContact({ commit }, updatedContact) {
    const response = await axios.put(
      `http://localhost:3000/contacts/${updatedContact.id}`,
      updatedContact
    );
    commit("updateContact", response.data);
  },
};

const mutations = {
  setContacts: (state, contacts) => (state.contacts = contacts),
  newContact: (state, contact) => state.contacts.push(contact),
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
