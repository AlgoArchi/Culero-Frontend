import { useState } from "react";
import { ReviewDetailType } from "@/types/feed";
import ReactStars from 'react-stars'
import parse from "html-react-parser";
import DefaultAvatar from '@/assets/images/default_avatar.png';
import TimeAgo from 'javascript-time-ago';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ReviewEditForm } from "../Review/edit";
import en from 'javascript-time-ago/locale/en'
import { useSelector } from "react-redux";
import { selectAuthToken, selectUser } from "@/store/status";
import { api } from "@/store/culero.api";

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

export const ReviewDetail: React.FC<ReviewDetailType> = ({ name, anonymous_user, avatar, star, review, date, review_id, reviewer_id }: ReviewDetailType) => {
    const currentDate = new Date(date);
    const timeDifference = Date.now() - currentDate.getTime() || 0;
    const owner = useSelector(selectUser);
    const token = useSelector(selectAuthToken);
    const [deleteReview] = api.useDeleteReviewMutation();
    const [getReviewData] = api.useGetReviewByUserMutation()

    const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false);

    const deleteReviewHandler = async () => {
        const current_page = location.pathname.split('/')[2]
        const result = await deleteReview({
            payload: {
                review_id: review_id,
                reviewed_user_id: current_page
            },
            token
        });
        if ((result as any).data) {
            await getReviewData({
                payload: {
                    reviewed_user_id: current_page,
                    skip: 10,
                    index: 1,
                },
                token
            })
        }
    }

    function closeReviewModal() {
        setReviewModalIsOpen(false);
    }
    return (
        <>
            
            <div className="p-2 flex flex-col md:space-x-6">
                <div className={`justify-end gap-1 ${owner && owner._id === reviewer_id ? 'flex' : 'hidden'} `}>
                    <span className="cursor-pointer" onClick={() => setReviewModalIsOpen(true)}><FaEdit /></span>
                    <span className="cursor-pointer" onClick={deleteReviewHandler} ><MdDelete /></span>
                </div>
                <div className='flex justify-end items-center gap-2'>
                    <ReactStars
                        count={5}
                        value={Number(star)}
                        size={22}
                        edit={false}
                        color2={'#ffd700'}
                    />
                </div>

                <div className="md:pl-20 text-white md:text-md text-sm">
                    <p>
                        {parse(review)}
                    </p>
                </div>
                <div className="flex justify-end">
                    <p>{timeAgo.format(Date.now() - timeDifference)}</p>
                </div>
                <div className="flex justify-end">
                    <div className="flex items-center gap-4 text-white md:text-md text-sm">
                        <p>
                            {anonymous_user ? 'Anonymous' : name}
                        </p>
                        {anonymous_user ?
                            <img className="h-8 w-8 md:h-12 md:w-12 object-cover rounded-full" src={DefaultAvatar} alt="Current profile photo" />
                            :
                            <img className="h-8 w-8 md:h-12 md:w-12 object-cover rounded-full" src={avatar ? avatar : DefaultAvatar} alt="Current profile photo" />
                        }


                    </div>

                </div>
            </div>
            <ReviewEditForm
                reviewModalIsOpen={reviewModalIsOpen}
                closeModal={closeReviewModal}
                star={star}
                review={review}
                review_id={review_id}
                anonymous_user={anonymous_user}
            />
        </>
    )
}