import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = process.env.REACT_APP_BASE_URL;

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (args = "") => ({
        url: `fee-assessment-books`,
        params: args,
      }),
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
