import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = process.env.REACT_APP_BASE_URL;

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: `fee-assessment-categories`,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
