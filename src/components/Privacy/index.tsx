import React from 'react'
import Modal from 'react-modal';

export type PrivacyProps = {
  privacyModalIsOpen: boolean,
  closeModal: () => void,
}
export const PrivacyModal: React.FC<PrivacyProps> = ({ privacyModalIsOpen, closeModal }: PrivacyProps) => {

  return (
    <div>
      <Modal
        closeTimeoutMS={200}
        isOpen={privacyModalIsOpen}
        className='absolute inset-modal border-none bg-[#2A349B] overflow-auto rounded-[15px] outline-none p-[20px] mr-[-50%] -translate-x-1/2 -translate-y-1/2 mt-[35px] text-white md:h-[70%] sm:h-[70%] lg:w-[33%] md:w-[54%] w-[80%]'
        overlayClassName='fixed top-0 left-0 right-0 bottom-0 bg-[#6c83b191]'
        ariaHideApp={false}
        onRequestClose={closeModal}
      >
        <div className="font-poppins">
          <h2 className='text-center text-[30px] pb-6'>Privacy Policy</h2>
          <div className='w-full md:text-[20px] sm:text-[16px] text-[14px] pb-8'>
            Culero values user privacy and is committed to safeguarding personal information. Our privacy policy outlines:
          </div>
          <p className='md:text-[16px] sm:text-[14px] text-[12px] pb-8'>
            Data Collection: Information collected includes reviews, user profiles, and interactions on the platform.
            Data Usage: Culero uses data to facilitate reviews, improve user experience, and maintain the platform's functionality.
            Data Sharing: Personal information is not shared publicly without user consent.
            Security Measures: Culero employs industry-standard security measures to protect user data.
          </p>
          <div className='w-full md:text-[20px] sm:text-[16px] text-[14px]'>
            Users are encouraged to review the complete Privacy Policy for detailed information on data handling practices.
          </div>
        </div>
      </Modal>
    </div>
  )
}