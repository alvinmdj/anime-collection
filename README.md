# This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## Deployment

App deployed on (same):

- Vercel: <https://anicollection.vercel.app>
- Netlify: <https://anicollection.netlify.app>

## Useful Links

- [GraphQL codegen for TypeScript](https://www.apollographql.com/docs/react/development-testing/static-typing/)
- [Anilist GraphiQL Interactive Editor](https://anilist.co/graphiql)
- [Anilist GraphQL Documentation](https://anilist.gitbook.io/anilist-apiv2-docs/overview/graphql/getting-started)

## Getting Started

Install dependencies:

```bash
npm install
```

Generate GraphQL types:

```bash
npm run compile
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Tech Stacks

- TypeScript
- React (React Hooks and React Context)
- Next.js
- Apollo Client (GraphQL)
- Emotion (CSS in JS)
- Web Local Storage

## Functionality

- **Anime List Page**

  - **Anime List**: As a user, I can see 10 anime on initial page load.
  - **Bulk add to the collection**: As a user, I can add multiple anime to the
    collection at once.

- **Anime Detail Page**

  - **Anime detail info**: As a user, I can anime info on the page.
  - **Add to the collection**: As a user, I can the anime to the collection.
  - **Collection info**: As a user, I can see if the anime already added to
    collection or not.

- **Collection List Page**

  - **Collection list info**: As a user, I can see list of collection that
    already added.
  - **Remove Collection**: As a user, I can remove collection from Collection
    List page.
  - **Add Collection**: As a user, I can add collection from Collection List
    page.
  - **Edit Collection**: As a user, I can edit collection name from Collection
    List page.

- **Collection Detail Page**
  - **Collection detail info**: As a user, I can see list of anime that already
    added to the collection.
  - **Remove anime from collection**: As a user, I can remove anime from
    Collection Detail page.
  - **Edit collection name**: As a user, I can edit collection name from
    Collection Detail page.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
