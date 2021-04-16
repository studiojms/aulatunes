import { useState } from 'react';

import Header from './components/Header/Header';
import Searchbox from './components/Searchbox/Searchbox';
import constants from './constants';

import './assets/styles.scss';

function App() {
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState(constants.sort.ALBUM);

  return (
    <>
      <Header />
      <Searchbox
        searchText={searchText}
        sort={sort}
        onChangeText={(e) => setSearchText(e.target.value)}
        onChangeSort={(e) => setSort(e.target.value)}
      />
    </>
  );
}

export default App;
