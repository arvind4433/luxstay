import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseAPI";
export const HotelAPI = createApi({
  reducerPath: "hotelAPI",
  baseQuery: baseQuery,
   endpoints: (builder) => ({

    getHotelAll: builder.query({
      query: () => ({
        url: "/getAll",
        method: "GET",
      }),
    }),

    getHotelById: builder.query({
      query: (id) => ({
        url: `/get/${id}`,
        method: "GET",
      }),
    }),

  }),
});

export const { useGetHotelAllQuery, useGetHotelByIdQuery } = HotelAPI;
