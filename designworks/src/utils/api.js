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
};

export default api;
