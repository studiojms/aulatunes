import AlbumUtils from './AlbumUtils';

describe('AlbumUtil', () => {
  it('should convert the given data to expected structure', () => {
    const albumData = {
      'im:name': {
        label: 'Heart',
      },
      'im:image': [
        {
          label:
            'https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/5b/22/ea/5b22eaec-5b90-b785-7999-4389b1f9c6a5/20UMGIM88318.rgb.jpg/55x55bb.png',
          attributes: {
            height: '55',
          },
        },
        {
          label:
            'https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/5b/22/ea/5b22eaec-5b90-b785-7999-4389b1f9c6a5/20UMGIM88318.rgb.jpg/60x60bb.png',
          attributes: {
            height: '60',
          },
        },
        {
          label:
            'https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/5b/22/ea/5b22eaec-5b90-b785-7999-4389b1f9c6a5/20UMGIM88318.rgb.jpg/170x170bb.png',
          attributes: {
            height: '170',
          },
        },
      ],
      'im:itemCount': {
        label: '9',
      },
      'im:price': {
        label: '$10.99',
        attributes: {
          amount: '10.99000',
          currency: 'USD',
        },
      },
      'im:contentType': {
        'im:contentType': {
          attributes: {
            term: 'Album',
            label: 'Album',
          },
        },
        attributes: {
          term: 'Music',
          label: 'Music',
        },
      },
      rights: {
        label:
          'An EMI Records Nashville Release; ℗ 2021 BigEC Records LLC, under exclusive license to UMG Recordings, Inc.',
      },
      title: {
        label: 'Heart - Eric Church',
      },
      link: {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://music.apple.com/us/album/heart/1547677185?uo=2',
        },
      },
      id: {
        label: 'https://music.apple.com/us/album/heart/1547677185?uo=2',
        attributes: {
          'im:id': '1547677185',
        },
      },
      'im:artist': {
        label: 'Eric Church',
        attributes: {
          href: 'https://music.apple.com/us/artist/eric-church/123055194?uo=2',
        },
      },
      category: {
        attributes: {
          'im:id': '6',
          term: 'Country',
          scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
          label: 'Country',
        },
      },
      'im:releaseDate': {
        label: '2021-04-16T00:00:00-07:00',
        attributes: {
          label: 'April 16, 2021',
        },
      },
    };

    const structure = AlbumUtils.prepareAlbumData(albumData);

    const keys = Object.keys(structure);

    expect(keys).toContain('id');
    expect(keys).toContain('image');
    expect(keys).toContain('title');
    expect(structure.id).not.toBeNull();
    expect(structure.image).not.toBeNull();
    expect(structure.title).not.toBeNull();
  });

  it('should ignore missing attributes when converting data', () => {
    const structure = AlbumUtils.prepareAlbumData(null);

    const keys = Object.keys(structure);

    expect(keys).toContain('id');
    expect(keys).toContain('image');
    expect(keys).toContain('title');
  });
});
