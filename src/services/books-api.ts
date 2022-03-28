// Packages
import { createApi, BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

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

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://books.ioasys.com.br/api/v1',
  prepareHeaders: headers => {
    headers.set('authorization', `Bearer ${AUTHORIZATION}`)
    return headers
  },
})
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result: any = await baseQuery(args, api, extraOptions)

  if (result.error || result.error?.status === 401) {
    const refreshResult: any = await baseQuery(
      {
        url: '/auth/refresh-token',
        body: { refreshToken: localStorage.getItem('@ioasys:refresh-token') },
        method: 'POST',
      },
      api,
      extraOptions,
    )

    if (refreshResult.meta) {
      localStorage.setItem('@ioasys:token', refreshResult.meta.response.headers.get('Authorization'))
      localStorage.setItem('@ioasys:refresh-token', refreshResult.meta.response.headers.get('refresh-token'))

      const reAuthBaseQuery = fetchBaseQuery({
        baseUrl: 'https://books.ioasys.com.br/api/v1',
        prepareHeaders: headers => {
          headers.set('authorization', `Bearer ${refreshResult.meta.response.headers.get('Authorization')}`)
          return headers
        },
      })

      result = await reAuthBaseQuery(args, api, extraOptions)
    }
  }

  return result
}

export const booksApi = createApi({
  reducerPath: 'books',
  baseQuery: baseQueryWithReauth,
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
