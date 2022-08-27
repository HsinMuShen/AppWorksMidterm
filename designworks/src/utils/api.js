const api = {
  hostname: "http://localhost:3000",

  async addMessage(data) {
    const response = await fetch(`${this.hostname}/messages`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: "POST",
    });
    return await response.json();
  },

  async getMessages() {
    const response = await fetch(`${this.hostname}/messages`, {});
    return await response.json();
  },

  async deleteMessage(id) {
    const response = await fetch(`${this.hostname}/messages/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  },
};

export default api;
