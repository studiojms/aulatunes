import { useEffect, useState } from 'react';

import Album from '../album/Album';

function AlbumList({ data, search = '', loading }) {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data.filter((album) => album.title.includes(search)));
  }, [search, data]);

  return (
    <ul className="at-album-gallery">
      {loading && <span role="alert" className="at-loader" />}
      {!loading && filteredData.map((albumData) => <Album key={albumData.id} {...albumData} />)}
      {!loading && filteredData.length === 0 && (
        <div className="at-empty-result">
          No albums found for the search criteria
        </div>
      )}
    </ul>
  );
}

export default AlbumList;
