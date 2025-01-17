import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MainContent = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6; // Number of articles per page

  useEffect(() => {
    axios
      .get("/api/articles")
      .then((response) => {
        console.log(response.data); // Log the response data of fetched articles
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const getSnippet = (content) => {
    if (Array.isArray(content)) {
      const firstParagraph = content.find((c) => c.type === "paragraph");
      return firstParagraph
        ? firstParagraph.text.substring(0, 100) + "..."
        : "";
    }
    return "";
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <main className="p-8 bg-gray-100 font-sans">
      <section className="container mx-auto">
        <h1
          className="text-4xl font-extrabold text-center mb-12 text-gray-900 underline"
          style={{ fontFamily: "inter" }}
        >
          BLOGS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.length > 0 ? (
            currentArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {article.title}
                  </h3>
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <p className="text-gray-700 mb-4">
                    {getSnippet(article.content)}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    By {article.author}
                  </p>
                  <Link
                    to={`/articles/${article.id}`}
                    className="text-gray-500 font-semibold hover:text-indigo-600"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-600">No articles available</p>
          )}
        </div>

        {articles.length > articlesPerPage && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 mx-1 rounded bg-gray-800 text-white hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              ←
            </button>
            {getPageNumbers().map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`px-3 py-1 mx-1 rounded ${
                  currentPage === number
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 mx-1 rounded bg-gray-800 text-white hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default MainContent;
