// Packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const AUTHORIZATION = localStorage.getItem('@ioasys:token') || ''

interface GetBooksArg {
  page: number
  amount: number
}

interface Books {
  title: string
  description: string
  pageCount: number
  category: string
  imageUrl: string
  language: string
  isbn10: string
  isbn13: string
  publisher: string
  published: number
  authors: Array<string>
  id: string
}

interface GetBooksPayload {
  data: Array<Books>
  page: number
  totalItems: number
  totalPages: number
}

interface GetBookByIdArg {
  id: string
}

interface GetBookByIdPayload {
  authors: Array<string>
  category: string
  description: string
  id: string
  imageUrl: string
  isbn10: string
  isbn13: string
  language: string
  pageCount: number
  published: number
  publisher: string
  title: string
}

export const booksApi = createApi({
  reducerPath: 'books',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://books.ioasys.com.br/api/v1',
    prepareHeaders: headers => {
      headers.set('authorization', `Bearer ${JSON.parse(AUTHORIZATION)}`)

      return headers
    },
  }),
  keepUnusedDataFor: 3600,
  endpoints: builder => ({
    getBooks: builder.query<GetBooksPayload, GetBooksArg>({
      query: ({ page = 1, amount = 12 }) => ({
        url: `/books?page=${page}&amount=${amount}`,
      }),
    }),
    getBookById: builder.query<GetBookByIdPayload, GetBookByIdArg>({
      query: ({ id }) => ({
        url: `/books/${id}`,
      }),
    }),
  }),
})

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi
