import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyBlogs from "./pages/MyBlogs";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import WriteBlog from "./pages/WriteBlog";
import Logout from "./pages/Logout";
import Articles from "./pages/Articles";
import SingleArticle from "./pages/SingleArticle";
import Category from "./pages/Category";
import EditArticle from "./pages/EditArticle";
import SearchResults from "./pages/SearchResults";
import TheKingsroom from "./pages/thekingsroom";
import Member from "./pages/Member/Member";
import { teamMembersData } from "./assets/teamMembersData";
import { Toaster } from "react-hot-toast";

// Define router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route
        path='/about/:memberId'
        element={<Member teamMembersData={teamMembersData} />}
      />
      <Route path='/thekingsroom' element={<TheKingsroom />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='/articles' element={<Articles />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/sign-out' element={<Logout />} />
      <Route path='/category/:categoryName' element={<Category />} />
      {/*  <Route
        path='/category/:categoryName/:articleId'
        element={<SingleArticle />}
      /> */}
      <Route path='/blog/:articleId' element={<SingleArticle />} />
      <Route path='/search/:query' element={<SearchResults />} />
      <Route path='/edit/:articleId' element={<EditArticle />} />

      <Route element={<PrivateRoute />}>
        <Route path='/myBlogs/:userId' element={<MyBlogs />} />
        <Route path='/write' element={<WriteBlog />} />
      </Route>
    </Route>
  )
);

// Main App Component
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#333",
            color: "#fff",
            marginTop: "50px",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
            iconTheme: {
              primary: "green",
              secondary: "#333",
            },
          },
        }}
      />
    </>
  );
}

export default App;
