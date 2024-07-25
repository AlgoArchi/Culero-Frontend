import { Contact } from './Contact'
import { TermsModal } from '@/components/Terms'
import { useState } from 'react'
import { PrivacyModal } from '../Privacy';

export const Footer = () => {
  const [termsModalIsOpen, setTermsIsOpen] = useState(false);
  const [privacyModalIsOpen, setPrivacyIsOpen] = useState(false);

  const closeTermsModal = () => {
    setTermsIsOpen(false);
  }

  const openTermsModal = () => {
    setTermsIsOpen(true);
  }

  const closePrivacyModal = () => {
    setPrivacyIsOpen(false);
  }

  const openPrivacyModal = () => {
    setPrivacyIsOpen(true);
  }

  return (
    <footer>
      <Contact />
      <div className="bg-cblack-500 w-full">
        <div className="max-w-[1920px] mx-auto flex-col lg:flex-row flex gap-2 justify-between items-center px-9 py-3 lg:px-[180px]  text-white font-normal text-sm md:text-md lg:text-[16px]">
          <div className="text-center">©2023@Culero All rights reserved Developed by Agency </div>
          <div className='flex items-center gap-6'>
            <p className='cursor-pointer hover:text-[#646cff]' onClick={() => openTermsModal()} >Terms & Conditions</p>
            <span>|</span>
            <p className='cursor-pointer hover:text-[#646cff]' onClick={()=> openPrivacyModal()}>Privacy Policy</p>
          </div>
          <div className="flex justify-center items-center space-x-2 sm:space-x-4">
            <a
              href="#"
              target="_blank"
              className="text-white cursor-pointer"
            >
              <span className="cursor-pointer">FACEBOOK</span>
            </a>
            <span>|</span>
            <a href="#" target="_blank" className="text-white cursor-pointer">
              <span>LINKEDIN</span>
            </a>
            <span>|</span>
            <a href="#" target="_blank" className="text-white cursor-pointer">
              <span className="cursor-pointer">TWITTER</span>
            </a>
          </div>
        </div>
      </div>

      <TermsModal
        closeModal={closeTermsModal}
        termsModalIsOpen={termsModalIsOpen}
      />
      <PrivacyModal
        closeModal={closePrivacyModal}
        privacyModalIsOpen={privacyModalIsOpen}
      />
    </footer>
  )
}
