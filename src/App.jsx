import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ProjectPage from "./pages/ProjectPage";

const Home = () => (
  <div className='relative z-0 bg-primary overflow-hidden'>
    <div><Navbar /><Hero /></div>
    <main className="page-sections"><About /><Experience /><Tech /><Works /></main>
    <div className='relative z-0'><Contact /><StarsCanvas /></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
