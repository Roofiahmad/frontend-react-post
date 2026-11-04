import { useState, useEffect } from "react";
import { getArticles } from "../service/api";
import { LIMIT, STATUS } from "../utils/constants";
import Pagination from "../components/Pagination";
import ArticlePreview from "../components/ArticlePreview";

export default function Preview() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);

  const fetchArticles = async () => {
    try {
      const offset = page * LIMIT;
      const res = await getArticles(LIMIT, offset);
      const published = (res.data || []).filter(
        (a) => a.status === STATUS.PUBLISH,
      );
      setArticles(published);
    } catch (err) {
      console.error("Error fetching articles:", err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchArticles();
  }, [page]);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-4">
        Blog Preview
      </h1>

      {articles.length > 0 ? (
        articles.map((article) => <ArticlePreview article={article} />)
      ) : (
        <p className="text-gray-500">There's no published articles.</p>
      )}

      {/* Pagination */}
      <Pagination
        length={articles.length}
        limit={LIMIT}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
