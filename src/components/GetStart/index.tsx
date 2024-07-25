import { ButtonStart } from '@/components/UI'

export const GetStart = () => {
  return (
    <div className="bg-cblack-500 w-full">
      <div className="max-w-[1920px] mx-auto flex flex-col space-y-2 md:space-y-8 lg:space-y-0 lg:flex-row justify-between items-center py-6 px-5 md:py-[50px] lg:py-[57px] xl:px-[180px] lg:px-[50px]">
        <span className="font-semibold text-2xl xl:text-[40px] lg:text-[32px] text-white">Got a project in mind?</span>
        <ButtonStart
          title="Get Started"
          onClick={() => {
            console.log('clicked')
          }}
        />
      </div>
    </div>
  )
}
