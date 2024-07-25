export type ButtonStartProp = {
  title: string
  className?: string
  onClick: () => void
}

export const ButtonStart: React.FC<ButtonStartProp> = ({ title, className = '', onClick }: ButtonStartProp) => {
  return (
    <button
      onClick={onClick}
      className={`${className} font-semibold text-sm md:text-xl lg:text-2xl leading-[115%] px-12 lg:px-20 py-3 xl:py-5 lg:py-4 border border-[#9C11F3] hover:border-[#9C11F3] rounded-[45px] text-cwhite-500 hover:text-cblue-500 bg-gradient-to-r from-[#9C11F3] from-4% to-[#5741D9] to-100 hover:bg-white hover:from-[#ffffff] from-100 hover:to-[#ffffff] to-100 transition-all duration-500 active:border-[#9C11F3] focus:border-[#9C11F3] active:outline-[#9C11F3] focus:outline-[#9C11F3]`}
    >
      {title}
    </button>
  )
}
