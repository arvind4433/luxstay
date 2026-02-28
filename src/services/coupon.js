import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseAPI";
export const CouponAPI = createApi({
    reducerPath: "couponAPI",
   baseQuery: baseQuery, endpoints: (builder) => ({

        getCouponAll: builder.query({
            query: () => ({
                url: "/getAll",
                method: "GET",
            }),
        }),

        getCouponById: builder.query({
            query: (id) => ({
                url: `/get/${id}`,
                method: "GET",
            }),
        }),

    }),
});

export const { useGetCouponAllQuery, useGetCouponByIdQuery } = CouponAPI;
