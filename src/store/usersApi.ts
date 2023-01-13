import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IUsersData} from '../types/IUsers'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getUsers: builder.query<IUsersData, string>({
            query: (name) => `users`,
        }),
    }),
})
