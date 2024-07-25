import { FeedData } from '@/types/feed';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import ReactStars from 'react-stars'

export const FeedUserTab: React.FC<{ data: FeedData }> = ({ data }) => {
    console.log("data ", data)
    return (
        <div className="flex items-center space-x-6">
            <div className="">
                <img className="h-20 w-20 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
            </div>
            <div className="grid grid-cols-6 gap-2 w-1/2 text-white">
                <div className='col-span-3 flex flex-col justify-center items-center gap-2'>
                    <p className="">{data.name}</p>

                    <ReactStars
                        count={5}
                        value={data.star}
                        size={25}
                        edit={false}
                        color2={'#ffd700'} />
                </div>
                <div className="col-span-2 flex items-center">
                    {
                        data.socialPlatform == 'GITHUB' ?
                            <a href='' className='cursor-pointer text-white'>
                                <FaGithub className='w-8 h-8' />
                            </a>
                            :
                            <a href='' className='cursor-pointer text-white'>
                                <FaLinkedin className='w-8 h-8' />
                            </a>
                    }
                </div>
            </div>
            <div className='w-[30%] text-white'>
                <p className='line-clamp-2'>
                    {
                        data.review
                    }
                </p>
            </div>
            <IoIosMore className='w-10 h-6 text-white cursor-pointer' />
        </div>
    )
}