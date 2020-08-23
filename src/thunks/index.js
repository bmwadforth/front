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

  get({ query } = {}) {
    try {
      return this.axios.get(this.path, { params: query });
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  post({ query, body } = {}) {
    try {
      return this.axios.post(this.path, body ? body : null, { params: query ? query : null });
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  put({ query, body } = {}) {
    try {
      return this.axios.put(this.path, body ? body : null, { params: query ? query : null });
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  delete({ query } = {}) {
    try {
      return this.axios.delete(this.path, { params: query ? query : null });
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}

export default APIHelper;
