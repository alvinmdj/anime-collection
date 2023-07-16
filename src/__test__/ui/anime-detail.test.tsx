// import CollectionContextProvider from '@/context/CollectionContextProvider';
// import AnimeDetailPage from '@/pages/anime/[id]';
// import { MockedProvider } from '@apollo/client/testing';
// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import { getAnimeDetailMock } from './mock';

// jest.mock('next/router', () => require('next-router-mock'));

// describe('Anime Detail Page', () => {
//   it('shows loading spinner and then anime detail', async () => {
//     render(
//       <MockedProvider mocks={getAnimeDetailMock} addTypename={false}>
//         <CollectionContextProvider>
//           <AnimeDetailPage />
//         </CollectionContextProvider>
//       </MockedProvider>
//     );

//     expect(await screen.findByTestId('loading-spinner')).toBeInTheDocument();
//     expect(await screen.findByText('ONE PIECE')).toBeInTheDocument();
//   });

//   it('shows error message when encountered an error', async () => {
//     render(
//       <MockedProvider
//         mocks={getAnimeDetailMockNetworkError}
//         addTypename={false}
//       >
//         <CollectionContextProvider>
//           <AnimeDetailPage />
//         </CollectionContextProvider>
//       </MockedProvider>
//     );

//     expect(await screen.findByText('An error occurred')).toBeInTheDocument();
//   });
// });
