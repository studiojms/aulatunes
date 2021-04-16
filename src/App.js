import { useEffect, useState } from 'react';

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

  const listTopAlbums = async () => {
    const list = await AlbumService.listTopAlbums();
    setData(list?.feed?.entry.map(AlbumUtils.prepareAlbumData) || []);
  };

  const listTopSongs = async () => {
    const list = await AlbumService.listTopSongs();
    setData(list?.feed?.entry.map(AlbumUtils.prepareAlbumData) || []);
  };

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
  }, [sort]);

  return (
    <>
      <Header />
      <Searchbox
        searchText={searchText}
        sort={sort}
        onChangeText={(e) => setSearchText(e.target.value)}
        onChangeSort={(e) => setSort(e.target.value)}
      />
      <AlbumList data={data} search={searchText} loading={loading} />
    </>
  );
}

export default App;
