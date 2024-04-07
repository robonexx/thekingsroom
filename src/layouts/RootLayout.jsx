import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../utils/ScrollToTop'

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Header />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
