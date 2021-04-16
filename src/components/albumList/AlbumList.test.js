import { render, screen, within } from '@testing-library/react';
import AlbumList from './AlbumList';

describe('<AlbumList />', () => {
  it('should render all the elements passed via props', () => {
    const data = [
      {
        id: 1,
        title: 'item1',
      },
      {
        id: 2,
        title: 'item2',
      },
      {
        id: 3,
        title: 'item3',
      },
    ];
    render(<AlbumList data={data} />);

    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(3);
  });

  it('should not render the list of items when loading is set to true, but a loader', () => {
    const data = [
      {
        id: 1,
        title: 'item1',
      },
    ];

    render(<AlbumList data={data} loading />);

    const list = screen.getByRole('list');
    const { queryAllByRole, getByRole } = within(list);
    const items = queryAllByRole('listitem');
    expect(items.length).toBe(0);

    const loader = getByRole('alert');
    expect(loader).toBeInTheDocument();
  });

  it('should respect filter text and only show items that satifies the filters', () => {
    const data = [
      {
        id: 1,
        title: 'test',
      },
      {
        id: 2,
        title: 'item',
      },
      {
        id: 3,
        title: 'aula',
      },
    ];

    render(<AlbumList data={data} search="te" />);

    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(2);
  });

  it('should show a message when no items satifies the filters', () => {
    const data = [
      {
        id: 1,
        title: 'test',
      },
      {
        id: 2,
        title: 'item',
      },
      {
        id: 3,
        title: 'aula',
      },
    ];

    render(<AlbumList data={data} search="x" />);

    const list = screen.getByRole('list');
    const { queryAllByRole, getByText } = within(list);
    const items = queryAllByRole('listitem');
    expect(items.length).toBe(0);

    const message = getByText('No albums found for the search criteria');
    expect(message).toBeInTheDocument();
  });
});
