import { useEffect, useState } from 'react';

import Album from '../album/Album';

/**
 * Renders a list of albums
 *
 * @param {array} data data to be rendered
 * @param {string} search text to be searched in the album titles
 * @param {bool} loading indicates that the list is still loading (no album should be shown, but a loading indicator)
 * @param {func} toggleFavorite function to be call to set/unset the current album as favorite
 */
function AlbumList({ data, search = '', loading, toggleFavorite }) {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data.filter((album) => album.title.includes(search)));
  }, [search, data]);

  return (
    <ul className="at-album-gallery">
      {loading && <span role="alert" className="at-loader" />}
      {!loading &&
        filteredData.map((albumData) => (
          <Album key={albumData.id} {...albumData} toggleFavorite={() => toggleFavorite(albumData.id)} />
        ))}
      {!loading && filteredData.length === 0 && (
        <div className="at-empty-result">No albums found for the search criteria</div>
      )}
    </ul>
  );
}

export default AlbumList;
