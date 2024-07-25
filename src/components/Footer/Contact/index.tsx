import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useContents } from '@/hooks'

type Inputs = {
  name: string
  email: string
  message: string
}

export const Contact = () => {
  const { footer } = useContents()
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Email is mendatory'),
    message: Yup.string().required('Email is mendatory'),
    email: Yup.string()
      .required('Email is mendatory')
      .matches(/^(?=.*[@])/, 'Must contain @'),
  })

  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit } = useForm(formOptions)
  

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("Contact Data ", data);
  }

  return (
    <div className="bg-cblack-600 w-full">
      <div className="max-w-[1920px] mx-auto py-4 px-5 lg:pt-[80px] lg:pb-[100px] xl:px-[180px] lg:px-[50px] md:py-[45px]">
        <div className="flex flex-col items-center lg:items-start lg:flex-row space-y-4 lg:space-y-0 lg:justify-between mt-[23px]">
          <div className="lg:max-w-[300px] 2xl:max-w-[400px]">
            <div className="font-normal xl:text-xl lg:text-[16px] md:text-lg text-md text-white text-center lg:text-start">
              {footer.description}
            </div>
          </div>
          <div className="hidden gap-2 justify-around lg:grid lg:grid-cols-2 md:gap-8 lg:gap-6 lg:max-w-[220px]">

          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="text-cgray-500 font-[300] text-sm lg:text-xl">
              <div className="flex space-x-4 ">
                <input
                  placeholder="Name"
                  {...register('name')}
                  className="bg-transparent border-b border-cgray-500  min-w-[120px] md:min-w-[150px] lg:max-w-[120px] 2xl:min-w-[220px] pb-2 focus:outline-0"
                />
                <input
                  placeholder="Email"
                  {...register('email')}
                  className="bg-transparent border-b border-cgray-500  min-w-[120px] md:min-w-[150px] lg:max-w-[120px] 2xl:min-w-[220px] pb-2 focus:outline-0"
                />
              </div>

              <textarea
                {...register('message')}
                rows={3}
                placeholder="Message"
                className="bg-transparent w-full border-b border-cgray-500 text-cgray-500 mt-6 focus:outline-0"
              />
              <div className="w-full text-center lg:text-start">
                <input
                  type="submit"
                  value="Send Message"
                  className="bg-white hover:bg-gradient-to-r from-[#9C11F3] from-4% to-[#5741D9] to-100% text-cblue-500 hover:text-white font-semibold text-sm lg:text-[16px] leading-[115%] px-12 py-3 lg:px-16 lg:py-5 rounded-[45px] mt-6 cursor-pointer duration-500"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  )
}
