import CollectionContextProvider from '@/context/CollectionContextProvider';
import AnimeListPage from '@/pages';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { getAnimeListMock, getAnimeListMockNetworkError } from './mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('Anime List Page', () => {
  it('shows loading spinner and then anime title', async () => {
    render(
      <MockedProvider mocks={getAnimeListMock} addTypename={false}>
        <CollectionContextProvider>
          <AnimeListPage />
        </CollectionContextProvider>
      </MockedProvider>
    );

    expect(await screen.findByTestId('loading-spinner')).toBeInTheDocument();
    expect(await screen.findByText('Attack on Titan')).toBeInTheDocument();
  });

  it('shows error message when encountered an error', async () => {
    render(
      <MockedProvider mocks={getAnimeListMockNetworkError} addTypename={false}>
        <CollectionContextProvider>
          <AnimeListPage />
        </CollectionContextProvider>
      </MockedProvider>
    );

    expect(await screen.findByText('An error occurred')).toBeInTheDocument();
  });

  it('renders a heading', async () => {
    render(
      <MockedProvider mocks={getAnimeListMock}>
        <CollectionContextProvider>
          <AnimeListPage />
        </CollectionContextProvider>
      </MockedProvider>
    );

    const heading = screen.getByRole('heading', {
      name: /All-Time Popular Anime/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
