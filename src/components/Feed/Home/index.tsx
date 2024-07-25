import { FeedData } from '@/types/feed';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import ReactStars from 'react-stars'
import parse from "html-react-parser";

export const FeedUserTab: React.FC<FeedData> = ({index, avatar, name, star, link, socialPlatform, review, selectUser}: FeedData) => {
    const setUser = () => {
        selectUser(index);
    }

    return (
        <div className="flex items-center space-x-6">
            <div className="">
                <img className="h-20 w-20 object-cover rounded-full" src={avatar} alt="Current profile photo" />
            </div>
            <div className="grid grid-cols-6 gap-2 w-1/2 text-white">
                <div className='col-span-3 flex flex-col justify-center items-center gap-2'>
                    <p className="">{name}</p>

                    <ReactStars
                        count={5}
                        value={star}
                        size={25}
                        edit={false}
                        color2={'#ffd700'} />
                </div>
                <div className="col-span-2 flex items-center">
                    {
                        socialPlatform == 'GITHUB' ?
                            <a href={`https://github.com/${link}`} target='_blank' className='cursor-pointer text-white'>
                                <FaGithub className='w-8 h-8' />
                            </a>
                            :
                            <a href={`https://www.linkedin.com/in/${link}`} target='_blank' className='cursor-pointer text-white'>
                                <FaLinkedin className='w-8 h-8' />
                            </a>
                    }
                </div>
            </div>
            <div className='w-[30%] text-white'>
                <p className='line-clamp-2'>
                    {
                        parse(review)
                    }
                </p>
            </div>
            <IoIosMore className='w-10 h-6 text-white cursor-pointer' onClick={()=>setUser()} />
        </div>
    )
}