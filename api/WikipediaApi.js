
/**
 * @description Wikipedia API
 *
 *
 * @see
 */

class WikipediaApi {
  getUrl = (text, size) => `https://en.wikipedia.org/w/api.php?action=opensearch&search=${text}&limit=${size}&format=json`;

  search(text, size) {
    const url = this.getUrl(text, size);
    return new Promise ((resolve, reject) => {
      fetch(url, { method: 'GET' })
      .then((_response) => {
        const response = JSON.parse(_response._bodyText);
        if (response[1].length > 0) {
          resolve(response);
        }
        reject({ error: 'wikipedia/zero response' });
      }).catch((response) => reject(response));
    });
  }
}

export default new WikipediaApi();