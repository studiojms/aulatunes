class AlbumUtils {
  /**
   * Given the album data, creates an object holding information the application will use (protects the app from API changes)
   *
   *
   * @param {object} data album data
   * @returns
   */
  static prepareAlbumData(data) {
    const result = {};

    result.id = data?.id?.label;
    result.title = data?.title?.label;

    const images = data?.['im:image'] || [];
    if (images.length > 0) {
      result.image = images[images.length - 1]?.label;
    } else {
      result.image = null;
    }

    return result;
  }
}

export default AlbumUtils;
