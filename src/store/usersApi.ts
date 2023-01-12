import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IUser} from '../types/IUser'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], string>({
            query: (name) => `users`,
        }),
    }),
})
