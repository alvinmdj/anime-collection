import { MediaSort } from '@/__generated__/graphql';
import { GET_ANIME_DETAIL, GET_ANIME_LIST } from '@/graphql/anime';

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

export const getAnimeDetailMock = [
  {
    request: {
      query: GET_ANIME_DETAIL,
      variables: {
        id: 21,
      },
    },
    result: {
      data: {
        Media: {
          id: 21,
          title: {
            romaji: 'ONE PIECE',
            english: 'ONE PIECE',
            native: 'ONE PIECE',
          },
          description:
            "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.<br><br>\nEnter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.<br><br>\n<b>*This includes following special episodes:</b><br>\n- Chopperman to the Rescue! Protect the TV Station by the Shore! (Episode 336)<br>\n- The Strongest Tag-Team! Luffy and Toriko's Hard Struggle! (Episode 492)<br>\n- Team Formation! Save Chopper (Episode 542)<br>\n- History's Strongest Collaboration vs. Glutton of the Sea (Episode 590)<br>\n- 20th Anniversary! Special Romance Dawn (Episode 907)",
          bannerImage:
            'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg',
          coverImage: {
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg',
          },
          episodes: null,
          genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'],
          averageScore: 87,
          status: 'RELEASING',
        },
      },
    },
  },
];

export const getAnimeDetailMockNetworkError = [
  {
    request: {
      query: GET_ANIME_DETAIL,
      variables: {
        id: 21,
      },
    },
    error: new Error('An error occurred'),
  },
];
