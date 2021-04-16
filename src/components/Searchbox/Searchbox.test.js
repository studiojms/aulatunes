import { fireEvent, render, screen } from '@testing-library/react';
import constants from '../../constants';
import Searchbox from './Searchbox';

describe('<Searchbox />', () => {
  it('should render an input and a select with two options', () => {
    render(<Searchbox onChangeText={() => {}} onChangeSort={() => {}} />);

    const input = screen.getByRole('textbox');
    const combo = screen.getByRole('combobox');

    expect(input).toBeInTheDocument();
    expect(combo).toBeInTheDocument();
    expect(combo.childElementCount).toBe(2);
  });

  it('should invoke the given text change function when the input text changes', () => {
    const inputChangeFn = jest.fn();
    const selectChangeFn = jest.fn();

    render(<Searchbox onChangeText={inputChangeFn} onChangeSort={selectChangeFn} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'a' } });

    expect(inputChangeFn).toHaveBeenCalledTimes(1);
    expect(selectChangeFn).toHaveBeenCalledTimes(0);
  });

  it('should invoke the given sort change function when the select value changes', () => {
    const inputChangeFn = jest.fn();
    const selectChangeFn = jest.fn();

    render(<Searchbox onChangeText={inputChangeFn} onChangeSort={selectChangeFn} />);

    const select = screen.getByRole('combobox');

    fireEvent.change(select, { target: { value: constants.sort.SONG } });

    expect(inputChangeFn).toHaveBeenCalledTimes(0);
    expect(selectChangeFn).toHaveBeenCalledTimes(1);
  });
});
