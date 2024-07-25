import { useContents } from '@/hooks'
import { HowProp, HowDetail } from '@/components/UI/HowItworks'

export const How = () => {
  const { how } = useContents()
  return (
    <div className="w-full md:pb-20">
      <div className="max-w-[1920px] mx-auto mt-24 px-9 lg:px-[50px] xl:px-[180px] lg:pt-0 pt-10 ">
        <div className="flex items-center w-full">
          <div className="flex w-full">
            <div className="flex flex-col space-y-10 w-full">
              <h3 className="text-[#23003B] lg:text-[35px] md:text-[30px] text-[25px] font-semibold">How it works</h3>
              <div className="flex flex-col space-y-12 w-full">
                {how.how.map(({ title, content }: HowProp, index: number) => (
                  <HowDetail key={index} title={title} content={content} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
