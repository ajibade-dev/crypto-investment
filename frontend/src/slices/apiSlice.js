
// const baseQuery = fetchBaseQuery({baseUrl: ''});
//  export const apiSlice  = createApi({
//     baseQuery,
//     tagTypes: ['User'],
//     endpoints: (builder) => ({})
//  });

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL, // 👈 use env variable
  credentials: 'include', // needed if using cookies/sessions
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
