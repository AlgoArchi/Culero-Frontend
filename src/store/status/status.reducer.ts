import { createSlice } from '@reduxjs/toolkit'
// import { HYDRATE } from 'next-redux-wrapper'

const initState = {
    authToken: null,
    user: null,
    userReviewData: null,
    totalUserReviewCount: 0,
    userSearchResult: null,
    searchUser: null,
    recentReview: null,
}

const statusSlice = createSlice({
    name: 'status',
    initialState: initState,
    reducers: {
        setAuthToken: (state, { payload }) => {
            state.authToken = payload
        },
        setUser: (state, { payload }) => {
            state.user = payload
        },
        setUserReviewData: (state, { payload }) => {
            state.userReviewData = payload
        },
        setTotalUserReviewCount: (state, { payload }) => {
            state.totalUserReviewCount = payload
        },
        setUserSearchResult: (state, { payload }) => {
            state.userSearchResult = payload
        },
        setUserByID: (state, { payload }) => {
            state.searchUser = payload
        },
        setRecentReview: (state, {payload}) => {
            state.recentReview = payload
        }
    }
})

export const { setAuthToken, setUser, setUserReviewData, setTotalUserReviewCount, setUserSearchResult,setUserByID, setRecentReview } = statusSlice.actions;

export const statusReducer = statusSlice.reducer;