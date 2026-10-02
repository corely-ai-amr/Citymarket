// City Market API Client

const API = {
  async request(endpoint, options = {}) {
    const response = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return response.json();
  }
};

export default API;
