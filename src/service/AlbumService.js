const BASE_API_URL = `https://itunes.apple.com/us/rss/`;

class AlbumService {
  async listTopAlbums(limit = 100) {
    try {
      return await this._listAlbums('topalbums', limit);
    } catch (err) {
      console.error(err);
    }
  }

  async listTopSongs(limit = 100) {
    try {
      return await this._listAlbums('topsongs', limit);
    } catch (err) {
      console.error(err);
    }
  }

  async _listAlbums(mode = 'topalbuns', limit = 100) {
    try {
      const response = await fetch(`${BASE_API_URL}${mode}/limit=${limit}/json`);
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }
}

//exports an instance to make sure there will be only one instance in the whole app, kind of a singleton
export default new AlbumService();
