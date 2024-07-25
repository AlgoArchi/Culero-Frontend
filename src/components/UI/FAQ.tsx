export type FAQProp = {
  title: string
  content: string
}

export const FAQ: React.FC<FAQProp> = ({ title, content }: FAQProp) => {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <span className="font-bold text-sm md:text-2xl text-cblack-500"> {title} </span>
      </div>
      <div>
        <span className="text-sm leading-3 md:text-xl text-cblack-500 ">{content}</span>
      </div>
    </div>
  )
}
