import { useNavigate } from "react-router-dom";
import { Edit, Trash2 } from "lucide-react";
import { STATUS } from "../utils/constants";

const ArticleCard = ({ article, handleMoveToTrash, activeTab }) => {
  const navigate = useNavigate();

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 text-sm font-medium text-gray-900">
        {article.title}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">{article.category}</td>
      <td className="px-6 py-4 text-center text-sm font-medium space-x-4">
        <button
          onClick={() => navigate(`/edit/${article.id}`)}
          className="text-blue-600 hover:text-blue-900"
          title="Edit"
        >
          <Edit className="w-5 h-5 inline" />
        </button>
        {activeTab !== STATUS.TRASH && (
          <button
            onClick={() => handleMoveToTrash(article)}
            className="text-red-600 hover:text-red-900"
            title="Move to Thrash"
          >
            <Trash2 className="w-5 h-5 inline" />
          </button>
        )}
      </td>
    </tr>
  );
};

export default ArticleCard;
