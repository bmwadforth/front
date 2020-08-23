import APIHelper from './index';

export default class ArticlesApi extends APIHelper {
  static async fetch() {
    try {
      //const res = await axios.get(URL);
      const res = new APIHelper(`/articles`).get();

      return res.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
