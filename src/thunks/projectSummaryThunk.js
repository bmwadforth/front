import APIHelper from './index';

export default class ProjectsAPI extends APIHelper {
  static async fetch() {
    try {
      //const res = await axios.get(URL);
      const api = new APIHelper(`/projects`);
      const res = await api.get();
      return res.data.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
