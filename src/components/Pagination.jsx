const Pagination = ({ page, setPage, length, limit }) => {
  return (
    <div className="flex justify-between items-center pt-6">
      <button
        disabled={page === 0}
        onClick={() => setPage(page - 1)}
        className={`px-4 py-2 border rounded-md font-medium ${
          page === 0
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
        }`}
      >
        Previous
      </button>
      <span className="text-sm font-semibold text-gray-600">
        Page {page + 1}
      </span>
      <button
        disabled={length < limit}
        onClick={() => setPage(page + 1)}
        className={`px-4 py-2 border rounded-md font-medium ${
          length < limit
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
