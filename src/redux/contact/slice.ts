import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { Response } from "src/types/response";

export const contactApiSlice = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc" }),
  endpoints: (builder) => ({
    getContacts: builder.query<Response<ContactDto[]>, void>({
      query() {
        return {
          url: "/190/h/560e0501fa0e19aed9ef169df6095f00.json",
        };
      },
    }),
    getGroupContacts: builder.query<Response<GroupContactsDto[]>, void>({
      query() {
        return {
          url: "/503/h/03b7cef5194e433422491a8f22413a18.json",
        };
      },
    }),
  }),
});
