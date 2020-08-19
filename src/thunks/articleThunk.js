import axios from './index';

const URL = 'http://localhost:8080/api/v1/articles';
export default class ArticleApi {
  static async fetch() {
    try {
      //const res = await axios.get(URL);
      const res = {
        data: [
          {
            id: 1,
            title: 'My Article',
            description: 'This is a really cool article awesome lol',
            created: Date.now(),
          },
        ],
      };

      return res.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
