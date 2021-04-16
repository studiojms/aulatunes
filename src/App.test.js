import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  describe('when the app is rendered, it', () => {
    beforeEach(() => {
      render(<App />);
    });

    it('should show application logo', () => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('should show the input and select for searching', () => {
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('should show the data list area', () => {
      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });

});
