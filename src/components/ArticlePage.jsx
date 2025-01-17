import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/articles/${id}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
  }, [id]);

  // Function to render content correctly
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (item.type === "paragraph") {
          return (
            <p key={index} className="text-gray-800">
              {item.text}
            </p>
          );
        }
        // Add other conditions if there are more content types
        return null;
      });
    }
    return <p className="text-gray-800">{content}</p>; // Return as is if content is a string
  };

  return (
    <div className="p-6">
      {article ? (
        <>
          <h1 className="text-3xl font-bold mb-4 underline">{article.title}</h1>
          {renderContent(article.content)}
        </>
      ) : (
        <p>Loading article...</p>
      )}
    </div>
  );
};

export default ArticlePage;
