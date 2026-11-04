import { useState, useEffect } from "react";
import { getArticles, updateArticle } from "../service/api";
import ArticleCard from "../components/ArticleCard";
import { STATUS, TABS_LABEL, TABS_LIST } from "../utils/constants";

export default function AllPosts() {
  const [activeTab, setActiveTab] = useState(TABS_LIST[0]);
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const res = await getArticles(25, 0);
      setArticles(res.data || []);
    } catch (err) {
      console.error("Error fetching articles:", err);
    }
  };

  const handleMoveToTrash = async (article) => {
    try {
      const updatedData = {
        ...article,
        status: STATUS.TRASH,
      };
      await updateArticle(article.id, updatedData);
      fetchArticles();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredArticles = articles.filter((item) => item.status === activeTab);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchArticles();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">All Posts</h1>

      {/* Tabs Navigation */}
      <div className="flex border-b mb-6">
        {TABS_LIST.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 capitalize font-semibold ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {TABS_LABEL[tab]} ({articles.filter((a) => a.status === tab).length}
            )
          </button>
        ))}
      </div>

      {/* Table List */}
      <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  handleMoveToTrash={handleMoveToTrash}
                  article={article}
                  activeTab={activeTab}
                />
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                  There's no article in this tab.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
