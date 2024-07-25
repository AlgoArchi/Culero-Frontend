export type ProfileInputProp = {
    type: string
}

export const ProfileInput: React.FC<ProfileInputProp> = ({ type='input' }: ProfileInputProp) => {
    return (
        <div className="w-full">
            <input type={type} className="w-full border-2 px-2 py-1 text-center rounded-[10px] border-[#5f6fdb] bg-transparent" />
        </div>
    )
}
