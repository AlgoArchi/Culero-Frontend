import React from 'react'
import Modal from 'react-modal';

export type TermsProps = {
  termsModalIsOpen: boolean,
  closeModal: () => void,
}
export const TermsModal: React.FC<TermsProps> = ({ termsModalIsOpen, closeModal }: TermsProps) => {

  return (
    <div>
      <Modal
        closeTimeoutMS={200}
        isOpen={termsModalIsOpen}
        className='absolute inset-modal border-none bg-[#2A349B] overflow-auto rounded-[15px] outline-none p-[20px] mr-[-50%] -translate-x-1/2 -translate-y-1/2 mt-[35px] text-white h-[70%] lg:w-[33%] md:w-[50%] w-[80%]'
        overlayClassName='fixed top-0 left-0 right-0 bottom-0 bg-[#6c83b191]'
        ariaHideApp={false}
        onRequestClose={closeModal}
      >
        <div className="font-poppins">
          <h2 className='text-center text-[30px] pb-6'>Terms & Conditions</h2>
          <div className='w-full md:text-[20px] sm:text-[16px] text-[14px] pb-8'>
            Culero, a US-based company operating from Delaware, welcomes you to its platform. By using Culero's services, you agree to the following:
          </div>
          <p className='md:text-[16px] sm:text-[14px] text-[12px]'>
            Reviews are based on individual experiences and perspectives.
            Users are responsible for the accuracy of the information shared.
            Culero does not guarantee the accuracy or truthfulness of reviews.
            Users agree to use the platform responsibly and ethically.

          </p>
        </div>
      </Modal>
    </div>
  )
}