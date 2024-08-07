import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TheKingsroom from './pages/thekingsroom';
import Member from './pages/Member/Member';
import { teamMembersData } from './assets/teamMembersData'; // Import teamMembersData

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='about/:memberId' element={<Member teamMembersData={teamMembersData} />} />
      <Route path='thekingsroom' element={<TheKingsroom />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
