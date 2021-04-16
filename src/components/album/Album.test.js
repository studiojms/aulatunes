import { fireEvent, render, screen } from '@testing-library/react';
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

  it('should show favorite icon on album', () => {
    render(<Album title="Album" />);

    const favoriteIcon = screen.getByRole('presentation');
    expect(favoriteIcon).toBeInTheDocument();
  });

  it('should add favorite class when favorite prop is true', () => {
    render(<Album title="Album" favorite />);

    const albumImage = screen.getByRole('img');
    expect(albumImage.className).toContain('favorite');
  });

  it('should call the function to toggle favorite when clicking on the Album', () => {
    const toggleFn = jest.fn();

    render(<Album image="logo.jpg" toggleFavorite={toggleFn} />);

    const albumComponent = screen.getByRole('listitem');

    fireEvent.click(albumComponent);

    expect(toggleFn).toHaveBeenCalledTimes(1);
  });
});
