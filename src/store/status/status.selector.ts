import { createSelector } from '@reduxjs/toolkit';

export const selectStatusRoot = createSelector(
    (state) => state,
    (state) => state.status,
);

export const selectAuthToken = createSelector(selectStatusRoot, (state) => state?.authToken);
export const selectUser = createSelector(selectStatusRoot, (state) => state?.user);
export const selectUserReviewData = createSelector(selectStatusRoot, (state) => state?.userReviewData);
export const selectTotalUserReviewCount = createSelector(selectStatusRoot, (state) => state?.totalUserReviewCount);
export const selectUserSearchResult = createSelector(selectStatusRoot, (state) => state?.userSearchResult);
export const selectUserByID = createSelector(selectStatusRoot, (state) => state?.searchUser);
export const selectRecentReview = createSelector(selectStatusRoot, (state) => state?.recentReview);