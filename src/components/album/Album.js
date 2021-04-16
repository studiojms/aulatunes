import starEmpty from '../../assets/star.svg';
import starFull from '../../assets/star-full.svg';

/**
 * Renders an album
 *
 * @param {string} title album title
 * @param {string} image album cover url
 * @param {bool} favorite true if album is marked favorite, false otherwise
 * @param {func} toggleFavorite function to be call to set/unset the current album as favorite
 */
function Album({ title, image, favorite, toggleFavorite }) {
  return (
    <li className="at-album" onClick={toggleFavorite}>
      <div className="at-header-container">
        <img src={favorite ? starFull : starEmpty} alt="Star icon" role="presentation" width="25" />
        <h4 className="title">{title}</h4>
      </div>
      <div className="at-image-container">
        <img loading="lazy" src={image} alt={title} className={`at-image ${favorite && 'favorite'}`} />
      </div>
    </li>
  );
}

export default Album;
