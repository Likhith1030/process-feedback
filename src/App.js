import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";

import Navbar        from "./components/Navbar";
import Footer        from "./components/Footer";
import ScrollToTop   from "./components/ScrollToTop";
import Home          from "./pages/Home";
import Contact       from "./pages/Contact";
import Team          from "./pages/Team";
import Research      from "./pages/Research";
import TeacherGuides from "./pages/TeacherGuides";
import Attribution   from "./pages/Attribution";
import Error from "./pages/Error";

/**
 * Layout – wraps every page with the shared Navbar and Footer.
 */
function Layout({ children }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

/**
 * App – root component.
 *
 * Routes:
 *   /              → Home
 *   /contact       → Contact
 *   /team          → Team
 *   /research      → Research
 *   /docs/teachers → Teacher Guides
 *   /attribution   → Attribution
 *
 * All routes share the same Navbar and Footer via <Layout>.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/contact"       element={<Contact />} />
          <Route path="/team"          element={<Team />} />
          <Route path="/research"      element={<Research />} />
          <Route path="/docs/teachers" element={<TeacherGuides />} />
          <Route path="/attribution"   element={<Attribution />} />

          {/* redirect unknown paths to Home */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
