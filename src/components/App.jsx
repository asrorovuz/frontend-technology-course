import "../styles/App.css"
import { NotFoundPage } from "../pages/NotFoundPage";
import { ContactPage } from "../pages/ContactPage"
import { HomePage } from "../pages/HomePage"
import { Layout } from "../components/Layout"
import { DocPage } from "../pages/DocPage"
import { CoursePage } from "../pages/CoursePage"
import { AboutPage } from "../pages/AboutPage"
import { LoginPage } from "../pages/LoginPage"
import { AdminPage } from "../pages/AdminPage"
import { Routes, Route } from "react-router-dom";
import { CourseItemsPage } from "../pages/CourseItemsPage";


function App() {
  return (
    <div className="d-flex App">
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />}/>
            <Route path='/doc' element={<DocPage />}/>
            <Route path='/course' element={<CoursePage />} />
            <Route path='/course/:id' element={<CourseItemsPage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
          </Route>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/admin' element={<AdminPage />} />
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {/* <LoginPage /> */}
      {/* <Admin /> */}
    </div>
  );
}

export default App;
