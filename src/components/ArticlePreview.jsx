const ArticlePreview = ({ article }) => {
  return (
    <div
      key={article.id}
      className="bg-white p-6 rounded-lg shadow border border-gray-200"
    >
      <span className="text-xs font-bold text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded">
        {article.category}
      </span>
      <h2 className="text-xl font-bold text-gray-800 mt-2">{article.title}</h2>
      <p className="text-gray-600 mt-3 whitespace-pre-line leading-relaxed">
        {article.content}
      </p>
    </div>
  );
};

export default ArticlePreview;
