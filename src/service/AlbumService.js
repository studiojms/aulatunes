const BASE_API_URL = `https://itunes.apple.com/us/rss/`;
const LOCALSTORAGE_FAVORITE = 'aulatunes_FAVORITE';

class AlbumService {
  getFavorites() {
    let favorites = [];
    if ('localStorage' in window) {
      favorites = JSON.parse(localStorage.getItem(LOCALSTORAGE_FAVORITE)) || [];
    }

    return favorites;
  }

  setFavorite(id) {
    let favorites = this.getFavorites();

    if (favorites?.includes(id)) {
      favorites = favorites.filter(fav => fav !== id);
    } else {
      favorites.push(id)
    }

    if ('localStorage' in window) {
      localStorage.setItem(LOCALSTORAGE_FAVORITE, JSON.stringify(favorites));
    }
  }

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
