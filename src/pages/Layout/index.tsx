import { Navbar, Footer, Container } from '@/components'
import './index.css'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className="w-full h-full">
      <div className='bg-gradient-to-t from-[#3231b2ad] to-[#aeb3e97d]'>
        <Navbar />
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  )
}
export default Layout
