// import { PLATFORM_TYPE } from "@/helpers/constants.helpers";

export type Nullable<T> = T | null;

export type ApiError = {
    success: false;
    message?: string;
    errors?: {
      message: string;
    }[];
};

export type ApiSuccess = {
    success: true;
};

export type ApiResponse<TPayload = unknown, TAttrName extends string = 'data'> = Record<
  TAttrName,
  TPayload
> &
  ApiSuccess;

export type IUser = {
    _id: string;
    email: string;
    firstname: string;
    lastname: string;
    username: string;
    picture: string;
    avg_score: number;
    github?: string;
    linkedin?: string;
}
export type IReviewDetail = {
    content: string;
    score: number;
    anonymous_user: boolean;
    reviewer_id: IUser;
    date: string;
    reviewed_user_id: string;
    _id: string;
}

export type IRecentReviewDetail = {
    picture: string,
    username: string,
    avgscore: number,
    link: string,
    score: number;
    reviewed_user_id: string;
    reviews: Array<{
        _id: string;
        picture: string;
        username: string;
        score: number;
        content: string;
    }>,
}

export type IReview = {
    reviewed_user_id: string;
    review: Array<IReviewDetail>;
    createdAt: string;
}

export type IRecentReview = {
    reviewed_user_id: IUser;
    review: Array<IReviewDetail>;
    createdAt: string;
    updatedAt: string;
}
export type LoginRequest = {
    email: string;
    firstname: string;
    lastname: string;
    name: string;
    picture: string;
};
  
export type LoginResponse = ApiResponse<IUser, 'user'> & {
    jwtToken: string;
};

export type ReviewDataByUserResponse = {
    reviews: IReview,
    count: number;
}

export type RecentReviewDataResponse = {
    reviews: Array<IRecentReview>,
}

export type ReviewDataByUserRequest = {
    reviewed_user_id: string;
    skip: number;
    index: number;
}

export type ReviewRequest = {
    reviewed_user_id: string;
    anonymous_user: boolean;
    reviewer_id: string;
    text: string;
    score: number;
};

export type EditReviewRequest = {
    review_id: string;
    anonymous_user: boolean;
    text: string;
    score: number;
    reviewed_user_id: string;
};

export type AddReviewByLinkRequest = {
    platform: string;
    link:string;
    anonymous_user: boolean;
    reviewer_id: string;
    text: string;
    score: number;
};

export type SearchUserRequest = {
    search_key: string; 
}

export type SearchUserResponse = {
    users: Array<{
        _id: string;
        picture: string;
        username: string;
    }>,
}

export type GetUserByIDRequest = {
    user_id: string; 
}

export type GetUserByIDResponse = {
    user: IUser
}
