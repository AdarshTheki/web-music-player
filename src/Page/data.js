export const data = {
  href: "https://api.spotify.com/v1/me/shows?offset=0&limit=20",
  limit: 20,
  next: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  offset: 0,
  previous: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  total: 4,
  items: [
    {
      collaborative: false,
      description: "string",
      external_urls: {
        spotify: "string",
      },
      href: "string",
      id: "string",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
          height: 300,
          width: 300,
        },
      ],
      name: "string",
      owner: {
        external_urls: {
          spotify: "string",
        },
        followers: {
          href: "string",
          total: 0,
        },
        href: "string",
        id: "string",
        type: "user",
        uri: "string",
        display_name: "string",
      },
      public: false,
      snapshot_id: "string",
      tracks: {
        href: "string",
        total: 0,
      },
      type: "string",
      uri: "string",
    },
  ],
};
