import { baseApi } from "../../api/baseApi";
import type { SystemHealthResponse } from "../../types/system";

export const systemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSystemHealth: builder.query<SystemHealthResponse, void>({
      query: () => "api/v1/system/health",
      providesTags: ["System"],
    }),
  }),
});

export const { useGetSystemHealthQuery } = systemApi;
