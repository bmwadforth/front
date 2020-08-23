import APIHelper from './index';

export default class ArticlesApi extends APIHelper {
  static async fetch() {
    try {
      //const res = await axios.get(URL);
      const api = new APIHelper(`/articles`);
      const res = await api.get();
      return res.data.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
