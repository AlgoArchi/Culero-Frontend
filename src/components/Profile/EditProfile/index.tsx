import { ProfileInput } from '@/components/UI/ProfileInput';

export const EditProfile = () => {
    return (
        <div className="flex flex-col gap-8 px-16 py-14 w-full">

            <div className="flex flex-col gap-6 w-[80%]">
                <div className="flex item-center gap-10 px-16 w-full">
                    <div className="grid grid-cols-5 gap-4 w-full">
                        <div className="col-span-1 flex items-center">
                            <p className="font-[600] text-[14px] mb-0">Email: </p>
                        </div>

                        <div className="col-span-2">
                            <ProfileInput type='email' />
                        </div>

                        <div className="col-span-2">
                            <button className="w-full border-2 px-2 py-1 text-center rounded-[10px] border-[#5f6fdb] bg-[#5f6fdb] hover:bg-transparent duration-200">CHANGE E-MAIL</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-[#505258] " />

            <div className="flex flex-col gap-6 w-[80%]">
                <div className="flex item-center gap-10 px-16 w-full">
                    <div className="grid grid-cols-5 gap-4 w-full">
                        <div className="col-span-1 flex items-center">
                            <p className="font-[600] text-[14px] mb-0">First Name: </p>
                        </div>

                        <div className="col-span-2">
                            <ProfileInput type='input' />
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                </div>

                <div className="flex item-center gap-10 px-16 w-full">
                    <div className="grid grid-cols-5 gap-4 w-full">
                        <div className="col-span-1 flex items-center">
                            <p className="font-[600] text-[14px] mb-0">Last Name: </p>
                        </div>

                        <div className="col-span-2">
                            <ProfileInput type='input' />
                        </div>

                        <div className="col-span-2"></div>
                    </div>
                </div>

                <div className="flex item-center gap-10 px-16 w-full">
                    <div className="grid grid-cols-5 gap-4 w-full">
                        <div className="col-span-1 flex items-center"></div>

                        <div className="col-span-2">
                            <button className="border-2 w-full px-2 py-1 text-center rounded-[10px] border-[#5f6fdb] bg-[#5f6fdb] hover:bg-transparent duration-200">SAVE</button>
                        </div>

                        <div className="col-span-2"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}