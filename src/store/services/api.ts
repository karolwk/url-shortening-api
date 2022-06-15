// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ShortCodeURL } from '../../shared/types';
// Define a service using a base URL and expected endpoints
export const shortedApi = createApi({
  reducerPath: 'shortUrlApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.shrtco.de/v2/' }),
  endpoints: (builder) => ({
    getShortedData: builder.mutation<ShortCodeURL, string>({
      query: (url) => `shorten?url=${url}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetShortedDataMutation } = shortedApi;
