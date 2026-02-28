import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseAPI";
export const BookingAPI = createApi({
    reducerPath: "bookingAPI",
  baseQuery: baseQuery,
    endpoints: (builder) => ({
        confirmBooking: builder.mutation({
            query: (body) => ({
                url: "/confirm",
                method: "POST",
                body,
            }),
        }),
        getMyBookings: builder.query({
            query: () => ({
                url: "/my-bookings",
                method: "GET",
            }),
        }),
    }),
});

export const { useConfirmBookingMutation, useGetMyBookingsQuery } = BookingAPI;
