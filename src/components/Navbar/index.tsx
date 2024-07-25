import { useEffect, useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { Logo } from '../UI/Logo'
import { Divide as Hamburger } from 'hamburger-react'
import { NavItem, items } from '../../contents/Navbar'
import { Link } from 'react-router-dom'
import DefaultAvatar from '@/assets/images/default_avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectUserSearchResult, setUserSearchResult } from '@/store/status';
import { useAuth0 } from "@auth0/auth0-react";
import { api } from '@/store/culero.api';

type SearchUserInfor = {
  _id: string,
  username: string,
  picture: string
}

export const Navbar = () => {
  const dispatch = useDispatch();
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const [nav, setNav] = useState(false)
  const [navbarClass, setNavbarClass] = useState('')
  const [tempLocation, setTempLocation] = useState('/')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchText, setSearhText] = useState('');
  const searchUserResult = useSelector(selectUserSearchResult);
  const [getUserBySearch] = api.useGetUserBySearchMutation();
  const [login] = api.useLoginMutation();
  const logoutWithRedirect = () => {
    console.log("Calling Logout");
    // dispatch(setUser(null));
    // dispatch(setAuthToken(null));
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      }
    });

  }


  let navigate = useNavigate();
  const autheticatedUser = useSelector(selectUser);
  const ref = useRef(null)
  const searchRef = useRef(null)

  const showNav = () => {
    setNav((v) => !v)
  }
  window.onscroll = function () {
    scrollFunction()
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      dispatch(setUserSearchResult([]));
    }
  };

  function scrollFunction() {
    const scrollY = window.pageYOffset
    if (scrollY > 70) {
      setNavbarClass(
        ' py-[4px] md:py-[8px] lg:py-[12px] xl:py-[15px] backdrop-blur shadow-[0_0_9px_1px_rgba(0,0,0,0.5)]',
      )
    } else {
      setNavbarClass('')
    }
  }
  const openPage = (page: string) => {

    navigate(`/${page}`)
  }

  const getSearchUserHandler = async () => {
    if (searchText === '') {
      return;
    }
    await getUserBySearch({
      search_key: searchText
    })
  }

  const goto = (link: string) => {
    console.log(link);
    navigate(`/profile/${link}`)
  }

  const loginHandler = async () => {
    if (user) {
      const req = {
        email: user?.email || '',
        firstname: user?.given_name || '',
        lastname: user?.family_name || '',
        name: user?.name || '',
        picture: user?.picture || '',
      }
      const result = await login(req)
      if ((result as any).data) {
        console.log(result);
        navigate(`/profile/${(result as any).data.user._id}`);
      }
    }
  }
  useEffect(() => {
    console.log(user);
    loginHandler();
  }, [user])
  useEffect(() => {
    getSearchUserHandler();
  }, [searchText]);

  useEffect(() => {
    setTempLocation(location.pathname)
  }, []);

  useEffect(() => {
    const handleOutSideClick = (event: { target: any; }) => {
      const currentEle = ref.current as any
      if (!currentEle) {
        return
      }
      if (!currentEle.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref])

  useEffect(() => {
    const handleOutSideClick = (event: { target: any; }) => {
      const currentEle = searchRef.current as any
      if (!currentEle?.contains(event.target)) {
        dispatch(setUserSearchResult([]));
        setSearhText('')
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [searchRef])

  return (
    <div
      className={
        'w-full flex justify-center transition-all duration-300 py-[10px] lg:py-[33px] md:py-[15px] ' +
        navbarClass
      }
    >
      <header className={`w-full  max-w-[1920px] flex justify-between items-center px-9 xl:px-[180px] lg:px-[50px] `}>
        <Logo />
        {/* <div className="">
          <input type="input" className="w-full focus:outline-none border-2 px-2 py-2 rounded-[10px] border-[#5f6fdb] bg-transparent placeholder:text-[#00000078]" placeholder='Search...' onChange={(e) => setSearhText(e.target.value)} onKeyPress={handleKeyPress} />
        </div>
        <div className="absolute bg-[#5f6fdb] top-12 w-[38%] rounded-md text-white overflow-y" ref={searchRef}>
          {
            searchUserResult?.length > 0 &&
            searchUserResult?.map((data: SearchUserInfor, index: number) => (
              <div key={index} onClick={() => goto(data._id)} className='flex justify-between items-center border-b h-12 px-4 py-1 w-full text-white hover:bg-[#9798d9] focus:bg-cgray-500'>
                <div className='w-[18%]'>
                  <img src={data.picture ? data.picture : DefaultAvatar} className="flex items-center rounded-full" />
                </div>
                <p className='m-0 text-center px-2 w-full cursor-pointer'>{data.username}</p>
              </div>
            ))
          }
        </div> */}

        <div className="relative flex items-center justify-center md:w-[40%]">
          <input type="input" className="w-full focus:outline-none border-2 px-1 py-1 rounded-[10px] border-[#5f6fdb] bg-transparent placeholder:text-[#00000078]" placeholder='Search...' onChange={(e) => setSearhText(e.target.value)} onKeyPress={handleKeyPress} />

          <div className="absolute bg-[#5f6fdb] z-50 top-[38px] left-0 w-full rounded-md text-white overflow-y" ref={searchRef}>
          {
            searchUserResult?.length > 0 &&
            searchUserResult?.map((data: SearchUserInfor, index: number) => (
              <div key={index} onClick={() => goto(data._id)} className='flex justify-between items-center border-b md:h-12 h-10 px-4 py-1 w-full text-white hover:bg-[#9798d9] focus:bg-cgray-500'>
                <div className='w-[20%]'>
                  <img src={data.picture ? data.picture : DefaultAvatar} className="flex items-center rounded-full md:w-[50%] sm:w-[50%]" />
                </div>
                <p className='m-0 text-center md:px-2 px-1 w-full cursor-pointer'>{data.username}</p>
              </div>
            ))
          }
        </div>
        </div>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center gap-16 relative">
          {items.map((item: NavItem, index: number) => (
            <Link
              key={index}
              to={item.link}
              // spy={true}
              // smooth={true}
              // offset={-70}
              // duration={500}
              className={
                'text-cblack-500 font-medium hover:cursor-pointer active:text-[#9C11F3] active:font-bold navbar_active ' +
                (tempLocation == item.link && ' text-[#9c11f3] font-bold')
              }
            >
              {item.title}
            </Link>
          ))}

        </nav>

        {/* hamburger */}
        {nav ? (
          <i className="fixed right-[30px] z-50 lg:hidden">
            <Hamburger onToggle={showNav} toggled={nav} />
          </i>
        ) : (
          <i className="lg:hidden">
            <Hamburger onToggle={showNav} toggled={nav} />
          </i>
        )}

        {/* mobile nav */}
        <nav
          className={`h-[300px] right-0 fixed flex flex-col justify-around items-center w-full lg:hidden bg-white shadow-[0_0_9px_1px_rgba(0,0,0,0.5)] z-40 duration-1000 ${nav ? 'top-[0px]' : '-top-[300px]'
            } `}
        >
          {items.map((item: NavItem, index: number) => (
            <Link
              key={index}
              to={item.link}
              className=" text-cblack-500 font-medium hover:cursor-pointer"
              onClick={() => showNav()}
            >
              {item.title}
            </Link>
          ))}
          <button className="w-full text-center text-[18px] hover:text-[#01A7F5] bg-transparent" onClick={() => logoutWithRedirect()}>
            Sign out
          </button>
        </nav>
        {
          isAuthenticated ?
            <div className="relative">
              <span className="" onClick={() => setIsDropdownOpen(true)}>
                <img src={user?.picture ? user.picture : DefaultAvatar} alt="Profile Icon" className="rounded-[50%] w-[35px] h-[33px] cursor-pointer" />
              </span>
              {
                isDropdownOpen &&
                <div className="absolute w-[260px] bg-[#5f6fdb] px-6 py-4 rounded-[10px] right-0 z-50" ref={ref}>
                  <div className="w-full flex justify-center items-center space-x-4 px-1 pb-4 border-b border-[#6F6E6E] mb-4">
                    <img src={user?.picture ? user.picture : DefaultAvatar} alt="Profile Icon" className="rounded-[50%] w-[35px] h-[33px]" />
                    <span className="text-[18px]">{user?.name}</span>
                  </div>
                  <button className="w-full text-center text-[18px] px mb-4 hover:text-[#01A7F5]" onClick={() => openPage(`profile/${autheticatedUser._id}`)}>
                    Profile & Settings
                  </button>
                  <button className="w-full text-center text-[18px] px mb-4 hover:text-[#01A7F5]" onClick={() => openPage('review')}>
                    Review
                  </button>
                  <button className="w-full text-center text-[18px] hover:text-[#01A7F5]" onClick={() => logoutWithRedirect()}>
                    Sign out
                  </button>
                </div>
              }

            </div>
            :
            <a className={'text-cblack-500 font-medium hover:cursor-pointer navbar_active'} onClick={() => loginWithRedirect()}><span>Login</span></a>
        }
      </header>
    </div >
  )
}
