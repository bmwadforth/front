import axios from 'axios';

class APIHelper {
  constructor(path, noBase = false) {
    this.BASE = 'http://localhost:8080/api/v1';
    this.axios = axios;
    if (!noBase) {
      axios.defaults.baseURL = 'http://localhost:8080/api/v1';
    }
    // Add cookie/session/headers here too.
    this.path = path;
    return this;
  }

  async get({ query } = {}) {
    try {
      return await this.axios.get(this.path, { params: query });
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async post({ query, body } = {}) {
    try {
      return await this.axios.post(this.path, body ? body : null, { params: query ? query : null });
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async put({ query, body } = {}) {
    try {
      return await this.axios.put(this.path, body ? body : null, { params: query ? query : null });
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async delete({ query } = {}) {
    try {
      return await this.axios.delete(this.path, { params: query ? query : null });
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}

export default APIHelper;
