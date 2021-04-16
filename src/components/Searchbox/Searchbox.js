import constants from '../../constants';

/**
 * Tool to search for specific content and also change the way data is displayed
 *
 * @param {string} searchText the text to be searched in the album titles
 * @param {string} sort how data will be sorted (ALBUM | SONG)
 * @param {func} onChangeText function to be executed when text is changed
 * @param {func} onChangeSort function to be executed when the type of sort is changed
 */
function Searchbox({ searchText, sort, onChangeText, onChangeSort }) {
  return (
    <div className="at-searchbox">
      <input type="text" value={searchText || ''} onChange={onChangeText} placeholder="Search albums..." />
      <select value={sort} onChange={onChangeSort}>
        <option value={constants.sort.ALBUM}>Albums</option>
        <option value={constants.sort.SONG}>Songs</option>
      </select>
    </div>
  );
}

export default Searchbox;
