// import { FeedDetail } from '@/components/Feed/Detail';
// import { FeedUserTab } from '@/components/Feed/Home';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import Pagination from '@/components/Pagination/pagniation';
// import { api } from '@/store/culero.api';
// import {  useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import { selectUser, selectAuthToken, selectDummyReviewData, selectTotalDummyReviewCount } from '@/store/status';
// import { IReview } from '@/store/interface';

export const Feed = () => {
    // const navigate = useNavigate();

    // const user = useSelector(selectUser);

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/');
    //     }
    // }, [user]);

    // const [skip, ] = useState(10);
    // const [pageIndex, setPageIndex] = useState(1);
    // const [searchText, setSearhText] = useState('');

    // const [detailShow, setDetailShow] = useState<Boolean>(false);
    // const token = useSelector(selectAuthToken);
    // const dummyReviewData = useSelector(selectDummyReviewData);
    // const totalCount = useSelector(selectTotalDummyReviewCount);

    // const [selectedItem, setSelectedItem] = useState<number>(0);
    // const [getReviewData] = api.useGetDummyReviewDataMutation();

    // const selectCurrentUser = async (index: number) => {
    //     setSelectedItem(index);
    //     setDetailShow(true);
    // }

    // const backWard = () => {
    //     setDetailShow(false);
    // }
    // const getReviewDataHandler = async () => {
    //     await getReviewData({
    //         payload: {
    //             skip,
    //             index: pageIndex,
    //             searchText
    //         },
    //         token
    //     })
    // }
    // useEffect(() => {
    //     getReviewDataHandler()
    // }, [searchText, pageIndex])
    return (
        <div className='flex flex-col justify-center items-center'>
            {/* <div className="w-[60%] mt-56 mb-5">
                <input type="input" className="w-[50%] border-2 px-2 py-2 rounded-[10px] border-[#5f6fdb] bg-transparent placeholder:text-[#00000078]" placeholder='Search profile id' onChange={(e) => setSearhText(e.target.value)} />
            </div>
            <div className='flwx flex-col bg-[#5250d9a6] border border-white w-[60%] h-full rounded-lg mb-5'>
                <div className="p-20 mx-auto flex flex-col space-y-16 justify-center w-full">
                    {!detailShow && dummyReviewData &&
                        dummyReviewData.map((item: IReview, index: number) => (
                            <FeedUserTab key={index} index={index} avatar={item.picture} name={item.username} link={item.link} star={item.avgscore} socialPlatform={item.platform} review={item.reviews[0].content} selectUser={selectCurrentUser} />
                        ))}

                    {
                        detailShow &&
                        <FeedDetail selectedItem={selectedItem} backWard={() => backWard()} />
                    }
                </div>
            </div>
            <div className="flex justify-center items-center py-4">
                <Pagination
                    totalCount={totalCount}
                    pageIndex={pageIndex}
                    setPageIndex={setPageIndex}
                    skip={skip}
                />
            </div> */}
        </div>
    );
}
