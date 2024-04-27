import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base = "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/190/h/560e0501fa0e19aed9ef169df6095f00.json";

export const contactSlice = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({ baseUrl: base }),
  endpoints: (builder) => ({
    getContacts: builder.query<any, void>({
      query() {
        return {
          url: "/",
        };
      },
    }),
  }),
});
