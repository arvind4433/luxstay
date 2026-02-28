import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseAPI";
export const RoomAPI = createApi({
  reducerPath: "roomAPI",
  baseQuery: baseQuery,
  endpoints: (builder) => ({

    getRoomAll: builder.query({
      query: () => ({
        url: "/getAll",
        method: "GET",
      }),
    }),

    getRoomById: builder.query({
      query: (id) => ({
        url: `/get/${id}`,
        method: "GET",
      }),
    }),

  }),
});

export const { useGetRoomAllQuery, useGetRoomByIdQuery } = RoomAPI;
