import { useContents } from '@/hooks'

export const TitleView = () => {
  const { about } = useContents()
  return ( 
    <div className="w-full lg:h-screen">
      <div className="max-w-[1920px] mx-auto px-9 lg:px-[50px] xl:px-[180px] lg:pt-0 md:pt-10 pt-20">
        <div className="flex items-center w-full md:h-screen">
          <div className="flex w-full">
            <div className="flex flex-col space-y-10 w-full">
              <h3 className="text-[#23003B] lg:text-[70px] md:text-[65px] text-[30px] font-semibold">About Us</h3>
              <p className="text-[#23003B] lg:text-[28px] md:text-[20px]">{about.about}</p>
              <p className="text-[#23003B] lg:text-[28px] md:text-[20px]">{about.aboutSec}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
