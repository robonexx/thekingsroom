import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <header>
        header here
        <nav>nav here</nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
