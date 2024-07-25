import { toast } from 'react-toastify';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const API_PREFIX = import.meta.env.VITE_API_PREFIX || '';
import { setAuthToken, setUserReviewData, setTotalUserReviewCount, setUser, setUserSearchResult, setUserByID, setRecentReview } from './status';
import { AddReviewByLinkRequest, ApiError, GetUserByIDRequest, GetUserByIDResponse, LoginRequest, LoginResponse, RecentReviewDataResponse, ReviewDataByUserRequest, ReviewDataByUserResponse, ReviewRequest, SearchUserRequest, SearchUserResponse, EditReviewRequest } from './interface';

export const displayError = (
  err: ApiError | undefined,
  defaultMessage = 'Error while sending the request',
) => {
  if (err?.errors?.length) {
    toast(err.errors[0].message, {
      type: 'error',
    });
  } else if (err?.message) {
    toast(err.message, {
      type: 'error',
    });
  } else if ((err as any)?.error?.message) {
    toast((err as any).error.message, {
      type: 'error',
    });
  } else {
    toast(defaultMessage, {
      type: 'error',
    });
  }
};

function getHeadersFromToken(token: string, json?: boolean) {
  const headers: Record<string, string> = {};
  if (json) headers['Content-Type'] = 'application/json';
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_PREFIX }),
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (creds) => ({
        body: creds,
        method: 'POST',
        url: '/auth/login',
        headers: getHeadersFromToken('', true),
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const {
            data: {
              user,
              jwtToken
            }
          } = await queryFulfilled;
          dispatch(setAuthToken(jwtToken));
          dispatch(setUser(user));

          toast('Logged in successfully', {
            position: 'top-right',
            closeButton: false,
          });
        } catch (e: any) {
          displayError(e, 'Error while logging in');
        }
      },
      transformErrorResponse(err) {
        return err.data;
      },
    }),
    getRecentReview: builder.mutation<RecentReviewDataResponse, {}>({
      query: () => ({
        // body: payload,
        method: 'GET',
        url: '/review/getRecentReview',
        headers: getHeadersFromToken('', true),
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const {
            data: {
              reviews,
            }
          } = await queryFulfilled;
          dispatch(setRecentReview(reviews));
        } catch (e: any) {
          displayError(e, 'Error while logging in');
        }
      },
      transformErrorResponse(err) {
        return err.data;
      },
    }),
    getReviewByUser: builder.mutation<ReviewDataByUserResponse, { payload: ReviewDataByUserRequest, token: string }>({
      query: ({payload, token}) => ({
        body: payload,
        method: 'POST',
        url: '/review/getReviewByUser',
        headers: getHeadersFromToken(token, true),
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const {
            data: {
              reviews,
              count
            }
          } = await queryFulfilled;
          dispatch(setUserReviewData(reviews));
          dispatch(setTotalUserReviewCount(count));
        } catch (e: any) {
          displayError(e, 'Error while logging in');
        }
      },
      transformErrorResponse(err) {
        return err.data;
      },
    }),
    editReview: builder.mutation<boolean, { payload: EditReviewRequest, token: string }>({
      query: ({ payload, token }) => ({
        body: payload,
        method: 'POST',
        url: '/review/editReview',
        headers: getHeadersFromToken(token, true),
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;

          toast('Updated review successfully', {
            position: 'top-right',
            closeButton: false,
          });
        } catch (e: any) {
          displayError(e, 'Error while updating your review');
        }
      },
      transformErrorResponse(err) {
        return err.data;
      },
    }),
    deleteReview: builder.mutation<boolean, { payload: {review_id: string, reviewed_user_id: string}, token: string }>({
      query: ({ payload, token }) => ({
        body: payload,
        method: 'POST',
        url: '/review/deleteReview',
        headers: getHeadersFromToken(token, true),
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;

          toast('Deleted review successfully', {
            position: 'top-right',
            closeButton: false,
          });
        } catch (e: any) {
          displayError(e, 'Error while deleting your review');
        }
      },
      transformErrorResponse(err) {
        return err.data;
      },
    }),
    addReview: builder.mutation<boolean, { payload: ReviewRequest, token: string }>({
      query: ({ payload, token }) => ({
        body: payload,
        method: 'POST',
        url: '/review/addReview',
        headers: getHeadersFromToken(token, true),
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;

          toast('Added review successfully', {
            position: 'top-right',
            closeButton: false,
          });
        } catch (e: any) {
          displayError(e, 'Error while adding your review');
        }
      },
      transformErrorResponse(err) {
        return err.data;
      },
    }),
    addReviewByLink: builder.mutation<boolean, { payload: AddReviewByLinkRequest, token: string }>({
      query: ({ payload, token }) => ({
        body: payload,
        method: 'POST',
        url: '/review/addReviewByLink',
        headers: getHeadersFromToken(token, true),
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;

          toast('Added review successfully', {
            position: 'top-right',
            closeButton: false,
          });
        } catch (e: any) {
          displayError(e, 'Error while adding your review');
        }
      },
      transformErrorResponse(err) {
        return err.data;
      },
    }),
    getUserBySearch: builder.mutation<SearchUserResponse, SearchUserRequest>({
      query: (cred) => ({
        body: cred,
        method: 'POST',
        url: '/user/getUserBySearch',
        headers: getHeadersFromToken('', true),
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const {
            data: {
              users
            }
          } = await queryFulfilled;
          dispatch(setUserSearchResult(users));          
        } catch (e: any) {
          displayError(e, 'Error while logging in');
        }
      },
      transformErrorResponse(err) {
        return err.data;
      },
    }),
    getUserByID: builder.mutation<GetUserByIDResponse, GetUserByIDRequest >({
      query: (cred) => ({
        body: cred,
        method: 'POST',
        url: '/user/getUserByID',
        headers: getHeadersFromToken('', true),
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const {
            data: {
              user
            }
          } = await queryFulfilled;
          dispatch(setUserByID(user));
        } catch (e: any) {
          displayError(e, 'Error while getting data');
        }
      },
      transformErrorResponse(err) {
        return err.data;
      },
    }),
  })
})


