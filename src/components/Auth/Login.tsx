import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import GoogleIcon from '@/assets/images/google.png'
import LinkedinIcon from '@/assets/images/linkedin.svg'
import {
  LoginSocialGoogle,
  LoginSocialLinkedin,
  IResolveParams
} from 'reactjs-social-login';
import { api } from '@/store/culero.api';
import { LoginRequest } from '@/store/interface';
// import { useSelector } from 'react-redux';
// import { selectUser } from '@/store/status';
// import { useSelector, useDispatch } from "react-redux";
// import { selectAvatarURL, selectUserName, selectLoginStatus, setLoginStatus, setAvatarURL, setUserName, setUserId, setUserEmail, selectUserId, selectUserEmail, setLoginProvider } from "@/store/status";

const customStyles = {
  overlay: {
    backgroundColor: '#6c83b191',
  },
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#2a349b',
    borderRadius: '15px',
    border: 'none',
    marginTop: '35px',
    color: 'white',
    height: '54%',
    scrollbars: false,
  },
};

export type LoginProps = {
  authModalIsOpen: boolean,
  closeModal: () => void
}
export const AuthModal: React.FC<LoginProps> = ({ authModalIsOpen, closeModal }: LoginProps) => {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState<any>();
  const [login] = api.useLoginMutation();

  const navigate = useNavigate();

  const handleGoogleSignIn = async (req: LoginRequest) => {
    const result = await login(req)
    if ((result as any).data) {
      closeModal();
      navigate(`/profile/${(result as any).data.user._id}`);
    }
  }

  // const handleLinkedinSignin = async () => {
  //   console.log("Linkedin Login");
  // }

  const authLogin = async (provider: string, profile: any) => {
    console.log("Interacting Provider ", provider);
    console.log("Interacting Profile ", profile);
  }

  useEffect(() => {
    if (provider && profile) {
      authLogin(provider, profile)
    }
  }, [provider, profile])

  return (
    <div>
      <Modal
        closeTimeoutMS={200}
        isOpen={authModalIsOpen}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={closeModal}
      >
        <div className="text-center font-poppins text-[20px]">
          <div className='w-full text-center text-[50px] font-semibold mt-8 pb-6'>
            Log in
          </div>
          <div className='px-20'>
            <div className='w-full flex flex-col space-y-14 py-8 px-10'>
              <div className='w-full flex space-x-4 justify-center items-center cursor-pointer'>
                <LoginSocialGoogle
                  client_id={"1044491487797-iu6gkav7vtunq9a6l432tvufgv5eqoch.apps.googleusercontent.com"}
                  // typeResponse="idToken"
                  scope="openid profile email"
                  ux_mode="popup"
                  access_type="online"
                  onResolve={({ provider, data }: IResolveParams) => {
                    console.log("provider", provider);
                    console.log("data", data);
                    const req = {
                      email: data.email,
                      firstname: data.given_name,
                      lastname: data.family_name,
                      name: data.name,
                      picture: data.picture,
                      token: data.access_token,
                      type: provider
                    }
                    handleGoogleSignIn(req)
                  }}
                  onReject={(err: any) => {
                    console.log(err);
                  }}
                >
                  <img src={GoogleIcon} alt='Google Icon' className='w-[100px]' />
                </LoginSocialGoogle>
              </div>

              <div className='w-full flex space-x-4 justify-center items-center cursor-pointer'>
                <LoginSocialLinkedin
                  isOnlyGetToken
                  client_id={'78vop33tng3dru'}
                  client_secret={'hVHwBx6eke9temBr'}
                  redirect_uri={"https://culero.netlify.app"}
                  scope="email,profile"
                  ux_mode="popup"
                  access_type='offline'
                  onLoginStart={() => {
                    console.log("Linkedin Login Start");
                  }}
                  onResolve={({ provider, data }: IResolveParams) => {
                    console.log("provider", provider);
                    console.log("data", data);
                    setProvider(provider)
                    setProfile(data)
                    // handleLinkedinSignin(req);
                  }}
                  onReject={(err: any) => {
                    console.log(err)
                  }}
                >

                  <img src={LinkedinIcon} alt='Linkedin Icon' className='w-[100px]' />
                </LoginSocialLinkedin>
              </div>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}