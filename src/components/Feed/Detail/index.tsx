import { ReviewDetail } from '@/components/UI/Review';
import { IRecentReview, IReviewDetail } from '@/store/interface';
import { selectRecentReview } from '@/store/status';
import { useSelector } from 'react-redux';
import ReactStars from 'react-stars'
import defaultAvatar from '@/assets/images/default_avatar.png'
import { useEffect } from 'react';
import { api } from '@/store/culero.api';

export const FeedDetail = () => {
    const recentReviewData = useSelector(selectRecentReview);
    const [getRecentReview] = api.useGetRecentReviewMutation();
    const getRecentReviewHandler = async () => {
        await getRecentReview(true);
    }
    useEffect(() => {
        getRecentReviewHandler();
    }, [])

    return (
        <div className='flex flex-col space-y-20 relative px-9 lg:px-[50px] xl:px-[180px] py-14 lg:py-20'>
            <div className='bg-gradient-to-t from-[#3f3de99e] to-[#7f88e99e] rounded-lg p-10'>
                {
                    recentReviewData?.length > 0 ?
                    recentReviewData.map((data: IRecentReview, index: number) => (
                        <div key={index}>
                            <div className="flex items-center space-x-4">
                                <div className="">
                                    <img className="h-10 w-10 md:h-20 md:w-20 object-cover rounded-full" src={data.reviewed_user_id?.picture ? data.reviewed_user_id.picture : defaultAvatar} alt="Current profile photo" />
                                </div>
                                <div className="grid md:grid-cols-6 md:gap-2 gap-1 md:w-1/2 text-white">
                                    <div className='col-span-3 flex flex-col justify-center items-center gap-2'>
                                        <p className="">{data.reviewed_user_id?.username}</p>

                                        <ReactStars
                                            count={5}
                                            value={data.reviewed_user_id?.avg_score}
                                            size={25}
                                            edit={false}
                                            color2={'#ffd700'} />
                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-col space-y-10 md:space-y-20 w-full'>
                                {
                                    data.review &&
                                    data.review?.map((item: IReviewDetail, index: number) => (
                                        <ReviewDetail key={index} anonymous_user={item.anonymous_user} name={item.reviewer_id?.username} avatar={item.reviewer_id?.picture} star={item.score} review={item.content} date={item.date} review_id={item._id} reviewer_id={item.reviewer_id?._id}/>
                                    ))
                                }
                            </div>
                            <hr className='my-[30px]' />
                        </div>
                    ))
                    :
                    <div>
                        <p>No reviews here</p>
                    </div>
                }
            </div>
        </div>
    )
}