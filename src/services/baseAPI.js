import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.bookmyhotelroom.online/api',
     credentials: "include", 
prepareHeaders: (headers) => {
  const token = localStorage.getItem("token");
  if (token) {
    headers.set("Authorization", token); 
  }
  return headers;
},


  })

export default baseQuery;
