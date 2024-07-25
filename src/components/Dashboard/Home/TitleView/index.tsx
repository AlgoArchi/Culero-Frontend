import { useContents } from '@/hooks'

export const TitleView = () => {
  const { about } = useContents()
  return (
    <div className="w-full h-screen">
      <div className="max-w-[1920px] mx-auto px-9 lg:px-[50px] xl:px-[180px] lg:pt-0 pt-10 ">
        <div className="flex items-center w-full h-screen">
          <div className="flex w-full">
            <div className="flex flex-col space-y-10 w-full">
              <h3 className="text-[#23003B] lg:text-[70px] md:text-[65px] text-[30px] font-semibold">About Us</h3>
              <p className="text-[#23003B] text-[28px]">{about.about}</p>
              <p className="text-[#23003B] text-[28px]">{about.aboutSec}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
