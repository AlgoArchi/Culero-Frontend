import { useContents } from '@/hooks'

export const Why = () => {
  const { dashboard } = useContents()
  return (
    <div className="w-full">
      <div className="max-w-[1920px] mx-auto px-9 lg:px-[50px] xl:px-[180px] lg:pt-0 pt-10 ">
        <div className="flex items-center w-full">
          <div className="flex w-full">
            <div className="flex flex-col space-y-6 w-full">
              <h3 className="text-[#23003B] lg:text-[35px] md:text-[30px] text-[25px] font-semibold">Why Culero?</h3>
              <p className="text-sm md:text-lg text-cblack-500">{dashboard.why.first}</p>
              <p className="text-sm md:text-lg text-cblack-500">{dashboard.why.second}</p>
              <p className="text-sm md:text-lg text-cblack-500">{dashboard.why.third}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
