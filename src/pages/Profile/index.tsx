// import DefaultAvatar from '@/assets/images/default_avatar.png';
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Detail } from '@/components/Profile/Detail';
import Pagination from '@/components/Pagination/pagniation';
import { api } from '@/store/culero.api';
import { selectUser, selectAuthToken, selectUserReviewData, selectTotalUserReviewCount, selectUserByID } from '@/store/status';
import { IReviewDetail } from '@/store/interface';
import { ReviewDetail } from '@/components/UI/Review';
import { ReviewForm } from "@/components/Review";

export const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [skip,] = useState(10);
    const [pageIndex, setPageIndex] = useState(1);
    const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false);
    const [showReviewButton, setShowReviewButton] = useState(false);

    const user = useSelector(selectUser);
    const searchUser = useSelector(selectUserByID);

    useEffect(() => {
        // setReviewModalIsOpen(true);
    }, [showReviewButton]);

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user]);

    const token = useSelector(selectAuthToken);

    const userReviewData = useSelector(selectUserReviewData);
    const totalReviewCount = useSelector(selectTotalUserReviewCount);

    const [getReviewData] = api.useGetReviewByUserMutation();
    const [getUserByID] = api.useGetUserByIDMutation();

    function closeReviewModal() {
        setReviewModalIsOpen(false);
    }

    const getUserByIDHandler = async (user_id: string) => {
        await getUserByID({ user_id });
        await getReviewData({
            payload: {
                reviewed_user_id: user_id,
                skip,
                index: pageIndex,
            },
            token
        })
    }

    useEffect(() => {
        const current_page = location.pathname.split('/')[2]
        if (current_page != user._id) {
            setShowReviewButton(true);
        }else {
            setShowReviewButton(false);
        }
        getUserByIDHandler(current_page);
    }, [location])

    const getReviewDataHandler = async () => {
        await getReviewData({
            payload: {
                reviewed_user_id: user._id,
                skip,
                index: pageIndex,
            },
            token
        })
    }

    useEffect(() => {
        getReviewDataHandler()
    }, [pageIndex])
    return (
        <div className='pt-20 flex flex-col justify-center h-full'>
            <div className="mx-auto flex justify-between items-center md:w-[60%] w-[90%]">
                <Detail avg_score={searchUser?.avg_score} picture={searchUser?.picture} username={searchUser?.username} />
                { showReviewButton?<button className="bg-gradient-to-r from-[#3231b2ad] to-[#4e59ce7d] text-[12px]" onClick={() => setReviewModalIsOpen(true)}>Leave Review</button> : ''}
            </div>
            <div className='flwx flex-col mx-auto bg-[#5250d9a6] border border-white md:w-[60%] w-[90%] h-full rounded-lg mb-5'>
                <div className="md:p-20 p-10 mx-auto flex flex-col space-y-16 justify-center w-full">
                    {
                        userReviewData ?
                            userReviewData?.review?.map((item: IReviewDetail, index: number) => (
                                <ReviewDetail key={index} anonymous_user={item.anonymous_user} name={item.reviewer_id?.username} avatar={item.reviewer_id?.picture} star={item.score} review={item.content} date={item.date} review_id={item._id} reviewer_id={item.reviewer_id?._id}/>
                            ))
                            :
                            <p className="flex justify-center items-center">No Review</p>
                    }
                </div>
            </div>
            <div className="flex justify-center items-center py-4">
                <Pagination
                    totalCount={totalReviewCount}
                    pageIndex={pageIndex}
                    setPageIndex={setPageIndex}
                    skip={skip}
                />
            </div>
            <ReviewForm
                reviewModalIsOpen={reviewModalIsOpen}
                closeModal={closeReviewModal}
            />
        </div>
    );
}
