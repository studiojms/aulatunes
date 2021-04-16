import { useCallback, useEffect, useState } from 'react';

import AlbumList from './components/albumList/AlbumList';
import Header from './components/Header/Header';
import Searchbox from './components/Searchbox/Searchbox';
import AlbumService from './service/AlbumService';
import AlbumUtils from './utils/AlbumUtils';
import constants from './constants';

import './assets/styles.scss';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState(constants.sort.ALBUM);
  const [favorites, setFavorites] = useState([]);

  const processData = useCallback((list) => {
    const data = list?.feed?.entry.map(AlbumUtils.prepareAlbumData) || [];
    data.forEach((album) => {
      album.favorite = favorites?.includes(album.id);
    });
    setData(data);
  }, [favorites]);

  const listTopAlbums = useCallback(async () => {
    const list = await AlbumService.listTopAlbums();
    processData(list);
  }, [processData]);

  const listTopSongs = useCallback(async () => {
    const list = await AlbumService.listTopSongs();
    processData(list);
  }, [processData]);

  const toggleFavorite = (id) => {
    AlbumService.setFavorite(id);

    let data = [...favorites, id];

    if (favorites.includes(id)) {
      data = favorites.filter((fav) => fav !== id);
    }

    setFavorites(data);
  };

  useEffect(() => {
    setFavorites(AlbumService.getFavorites());
  }, [data]);

  useEffect(() => {
    try {
      setLoading(true);
      switch (sort) {
        case constants.sort.ALBUM:
          listTopAlbums();
          break;
        case constants.sort.SONG:
          listTopSongs();
          break;
        default:
          setData([]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [sort, listTopAlbums, listTopSongs]);


  return (
    <>
      <Header />
      <Searchbox
        searchText={searchText}
        sort={sort}
        onChangeText={(e) => setSearchText(e.target.value)}
        onChangeSort={(e) => setSort(e.target.value)}
      />
      <AlbumList data={data} search={searchText} loading={loading} toggleFavorite={toggleFavorite} />
    </>
  );
}

export default App;
