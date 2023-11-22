import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      providesTags:["users"]
    }),
    addUser: builder.mutation({
      query: ({id,name,username,email}) => ({
        url : "users",
        method: "POST",
        body:{id,name,username,email}
      }),
      invalidatesTags:["users"]
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url : `users/${id}`,
        method: "DELETE"
      }),
      invalidatesTags:["users"]
    }),
    updateUser: builder.mutation({
      query: ({id,name}) => ({
        url : `users/${id}`,
        method: "PATCH",
        body:{name}
      }),
      invalidatesTags:["users"]
    })
  }),
})

export const { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;