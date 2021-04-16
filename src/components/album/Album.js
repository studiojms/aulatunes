/**
 * Renders an album
 * 
 * @param {string} title album title
 * @param {string} image album cover url
 */
function Album({ title, image }) {
  return (
    <li className="at-album">
      <h4 className="title">{title}</h4>
      <div className="at-image-container">
        <img loading="lazy" src={image} alt={title} className="at-image" />
      </div>
    </li>
  );
}

export default Album;
