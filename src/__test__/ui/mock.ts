import { MediaSort } from '@/__generated__/graphql';
import { GET_ANIME_LIST } from '@/graphql/anime';

export const getAnimeListMock = [
  {
    request: {
      query: GET_ANIME_LIST,
      variables: {
        page: 1,
        perPage: 10,
        sort: MediaSort['PopularityDesc'],
      },
    },
    result: {
      data: {
        Page: {
          pageInfo: {
            total: 5000,
            currentPage: 1,
            lastPage: 500,
            hasNextPage: true,
            perPage: 10,
          },
          media: [
            {
              id: 16498,
              title: {
                romaji: 'Shingeki no Kyojin',
                english: 'Attack on Titan',
                native: '進撃の巨人',
              },
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg',
              },
            },
            {
              id: 101922,
              title: {
                romaji: 'Kimetsu no Yaiba',
                english: 'Demon Slayer: Kimetsu no Yaiba',
                native: '鬼滅の刃',
              },
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg',
              },
            },
            {
              id: 1535,
              title: {
                romaji: 'DEATH NOTE',
                english: 'Death Note',
                native: 'DEATH NOTE',
              },
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1535-lawCwhzhi96X.jpg',
              },
            },
            {
              id: 21459,
              title: {
                romaji: 'Boku no Hero Academia',
                english: 'My Hero Academia',
                native: '僕のヒーローアカデミア',
              },
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21459-DUKLgasrgeNO.jpg',
              },
            },
            {
              id: 113415,
              title: {
                romaji: 'Jujutsu Kaisen',
                english: 'JUJUTSU KAISEN',
                native: '呪術廻戦',
              },
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-bbBWj4pEFseh.jpg',
              },
            },
            {
              id: 11061,
              title: {
                romaji: 'HUNTER×HUNTER (2011)',
                english: 'Hunter x Hunter (2011)',
                native: 'HUNTER×HUNTER (2011)',
              },
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-sIpBprNRfzCe.png',
              },
            },
            {
              id: 21087,
              title: {
                romaji: 'One Punch Man',
                english: 'One-Punch Man',
                native: 'ワンパンマン',
              },
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21087-UV2tu6exrfXz.jpg',
              },
            },
            {
              id: 20605,
              title: {
                romaji: 'Tokyo Ghoul',
                english: 'Tokyo Ghoul',
                native: '東京喰種 トーキョーグール',
              },
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20605-fmnHdfurM7m6.jpg',
              },
            },
            {
              id: 11757,
              title: {
                romaji: 'Sword Art Online',
                english: 'Sword Art Online',
                native: 'ソードアート・オンライン',
              },
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx11757-Q9P2zjCPICq5.jpg',
              },
            },
            {
              id: 20958,
              title: {
                romaji: 'Shingeki no Kyojin 2',
                english: 'Attack on Titan Season 2',
                native: '進撃の巨人２',
              },
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20958-HuFJyr54Mmir.jpg',
              },
            },
          ],
        },
      },
    },
  },
];

export const getAnimeListMockNetworkError = [
  {
    request: {
      query: GET_ANIME_LIST,
      variables: {
        page: 1,
        perPage: 10,
        sort: MediaSort['PopularityDesc'],
      },
    },
    error: new Error('An error occurred'),
  },
];
