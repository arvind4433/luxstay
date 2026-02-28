import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseAPI";
export const ReviewAPI = createApi({
    reducerPath: "reviewAPI",
    baseQuery: baseQuery,
     endpoints: (builder) => ({

        getReviewAll: builder.query({
            query: () => ({
                url: "/getAll",
                method: "GET",
            }),
        }),

        getReviewById: builder.query({
            query: (id) => ({
                url: `/get/${id}`,
                method: "GET",
            }),
        }),

    }),
});

export const { useGetReviewAllQuery, useGetReviewByIdQuery } = ReviewAPI;
