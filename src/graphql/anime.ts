import { gql } from '@/__generated__';

export const GET_ANIME_LIST = gql(`
  query GetAnimeList($page: Int, $perPage: Int, $sort: [MediaSort]) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      # Define which variables will be used in the query (id)
      media(type: ANIME, sort: $sort) {
        # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
        }
      }
    }
  }
`);

export const GET_ANIME_DETAIL = gql(`
  query GetAnimeDetail($id: Int!) {
    Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
      id
      title {
        romaji
        english
        native
      }
      description
      bannerImage
      coverImage {
        large
      }
      episodes
      genres
      averageScore
      status
    }
  }
`);
