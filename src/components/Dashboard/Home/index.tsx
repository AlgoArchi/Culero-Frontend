import { ButtonStart } from '@/components/UI'
import ReviewImg from '@assets/images/review.jpg'
export const Home = () => {
  return (
    <div className="">
      <div
        className="mx-auto relative px-9 xl:pt-[180px] lg:pt-[150px] md:pt-[120px] pt-[90px] xl:px-[180px] lg:px-[50px] lg:h-[750px] xl:h-[950px] max-w-[1920px]"
        id="home"
      >
        <div className="max-w-[720px] lg:pl-0 mb-4 lg:mb-0">
          <div className="font-semibold text-[38px] leading-[39px] md:text-[45px] md:leading-[48px] lg:text-[60px] lg:leading-[60px] xl:text-[80px] xl:leading-[90px] text-cblack-500 mb-6">
          Culero
          </div>
          <div className="max-w-[482px] font-semibold text-xl md:text-2xl lg:text-[40px] leading-[23px] lg:leading-[46px] mb-6 lg:mb-12 text-black">
            <span className="text-cpurple-500">Empowering Workplace Transparency Through Peer Reviews </span>
          </div>
          <ButtonStart
            title={'Get Started'}
            onClick={() => {
              console.log('clicked')
            }}
          />
        </div>
        <div className='w-full lg:absolute lg:w-[450px] lg:h-[400px] xl:w-[600px] xl:h-[500px] xl:right-[140px] lg:right-[60px] xl:bottom-2 lg:bottom-[-25px] rounded-lg'> 
          <img src={ReviewImg} alt="img" className="w-full lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[450px] xl:right-[140px] lg:right-[60px] xl:bottom-2 lg:bottom-[-25px] rounded-lg shadow-3xl" />
        </div>
      </div>
    </div>
  )
}
