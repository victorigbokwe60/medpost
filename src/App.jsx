import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Removed BrowserRouter here
import MainContent from "./components/MainContent";
import ArticlePage from "./components/ArticlePage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewPostForm from "./components/NewPostForm";

const App = () => {
  const [articles, setArticles] = useState([]);

  const handleAddArticle = (newArticle) => {
    setArticles((prevArticles) => [...prevArticles, newArticle]);
  };

  const location = useLocation();
  const isFormRoute = location.pathname.includes("/newpost");

  return (
    <>
      <Navbar />
      {!isFormRoute && <Header />}
      <Routes>
        <Route path="/" element={<MainContent articles={articles} />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route
          path="/newpost"
          element={<NewPostForm onAdd={handleAddArticle} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
