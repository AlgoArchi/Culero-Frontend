import { ProfileDetail } from "@/types/profileDetail"
// import EditIcon from '@/assets/images/edit.png'
import ReactStars from 'react-stars'
import DefaultAvatar from '@/assets/images/default_avatar.png';

export const Detail: React.FC<ProfileDetail> = (data: ProfileDetail) => {
    return (
        <div className="p-8 py-14 w-full flex justify-between items-center">
            <div className="flex items-center md:gap-10 gap-4">
                <div>
                    <img src={data.picture ? data.picture :DefaultAvatar} alt="Profile Icon" className="rounded-[50%] border-[#5f6fdb] border-2 h-[50px] w-[50px] md:h-24 md:w-24" />
                    {/* <label htmlFor='upload_image' className="relative block cursor-pointer">
                        <div className="absolute right-1 top-[-28px] border-[#5f6fdb] p-0.5 border-2 bg-[#9293d7] rounded-[50%]">
                            <img src={EditIcon} alt="Avatar Edit Icon" width={17} height={17} />
                        </div>
                    </label>
                    <input type="file" id='upload_image' className="hidden" /> */}
                </div>
                <div className='flex flex-col space-y-4'>
                    {/* <h2>My Profile <span className="bg-[#00A4F2] border-2 border-[#00A4F2] rounded-[10px] text-[14px] px-2 ml-2">Premium</span></h2> */}
                    <p className="mb-0 max-sm:text-[14px]">{data.username}</p>
                    <div className='flex justify-start items-center gap-2'>
                        <ReactStars
                            count={5}
                            value={data.avg_score}
                            size={22}
                            edit={false}
                            color2={'#ffd700'} />
                    </div>
                </div>
            </div>
        </div>
    )
}