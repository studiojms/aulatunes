import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('should render the header with logo and alt text', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('at-header');

    const logo = header.firstChild;
    expect(logo.alt).toBe("AulaTunes Logo - The word Aula written")
  });
});
