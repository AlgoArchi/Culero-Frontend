import { useContents } from '@/hooks'
import { FAQProp, FAQ } from '@/components/UI/FAQ'

export const TitleView = () => {
  const { faq } = useContents()
  return (
    <div className="w-full h-full">
      <div className="max-w-[1920px] mx-auto px-9 lg:px-[50px] xl:px-[180px] py-48 ">
        <div className="flex items-center w-full">
          <div className="flex w-full">
            <div className="flex flex-col items-center w-full">
              {/* <h3 className="text-[#23003B] lg:text-[70px] md:text-[65px] text-[30px] font-semibold">How it works</h3> */}
              <div className="flex flex-col space-y-16 w-full">
                {faq.faq.map(({ title, content }: FAQProp, index: number) => (
                  <FAQ key={index} title={title} content={content} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
