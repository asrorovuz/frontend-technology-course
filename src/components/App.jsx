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
import { useState, useEffect } from "react";


function App() {

  const [navbar, setNavbar] = useState(false)
  const [data, setData] = useState(null);
// navbar
  const showNavbar = () => {
    setNavbar(!navbar)
  }

  const hideNavbar = (e) => {
    if(e.target.classList.contains('back-nav')){
      setNavbar(!navbar)
    }
}

// data
  const getData = () => {
    fetch("https://643a38e6bd3623f1b9af203f.mockapi.io/frontend-tech/card")
      .then((res) => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="d-flex App" onClick={(e) => hideNavbar(e)}>
      {data ? <Routes>
          <Route path='/' element={<Layout showNavbar={showNavbar} hideNavbar={hideNavbar} navbar={navbar}/>}>
            <Route path='/' element={<HomePage />}/>
            <Route path='/doc' element={<DocPage />}/>
            <Route path='/course' element={<CoursePage data={data}/>} />
            <Route path='/course/:type' element={<CourseItemsPage data={data}/>}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
          </Route>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/admin' element={<AdminPage />} />
          <Route path='*' element={<NotFoundPage />} />
      </Routes> : <NotFoundPage />}
    </div>
  );
}

export default App;
