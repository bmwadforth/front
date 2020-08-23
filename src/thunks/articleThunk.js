import APIHelper from './index';

export default class ArticleApi extends APIHelper {
  static async fetch(id) {
    try {
      const api = new APIHelper(`/articles/${id}`);
      const res = await api.get();
      return res.data.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
