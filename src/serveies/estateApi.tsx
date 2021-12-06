import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
  "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  "x-rapidapi-host": process.env.REACT_APP_API_HOST,
};

const createRequest = (url: string) => ({ url, headers: apiHeaders });

export const estateApi = createApi({
  reducerPath: "estateApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getEstateList: builder.query({
      query: (fitter: string) =>
        createRequest(`properties/list?locationExternalIDs=5002${fitter}`),
    }),
    getEstateById: builder.query({
      query: (id: string) => createRequest(`${id}`),
    }),
  }),
});

export const { useGetEstateListQuery, useGetEstateByIdQuery } = estateApi;
