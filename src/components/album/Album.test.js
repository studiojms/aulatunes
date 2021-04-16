import { render, screen } from '@testing-library/react';
import Album from './Album';

describe('<Album />', () => {
  it('should render album title', () => {
    const title = 'Album1';
    render(<Album title={title} />);

    const albumTitle = screen.getByRole('heading');
    expect(albumTitle.textContent).toBe(title);
  });

  it('should render album image', () => {
    const img = 'logo.jpg';
    render(<Album image={img} />);

    const albumImage = screen.getByRole('img');
    expect(albumImage.src).toContain(img);
  });

  it('should render album title and image, and image alt text should be the album title', () => {
    const title = 'Album1';
    const img = 'logo.jpg';
    render(<Album image={img} title={title} />);

    const albumImage = screen.getByRole('img');
    expect(albumImage.src).toContain(img);
    expect(albumImage.alt).toBe(title);
  });
});
