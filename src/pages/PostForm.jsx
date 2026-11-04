import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createArticle, getArticleById, updateArticle } from "../service/api";
import { STATUS } from "../utils/constants";

const DEFAULT_FORM_VALUE = {
  title: "",
  content: "",
  category: "",
};

export default function PostForm() {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [form, setForm] = useState(DEFAULT_FORM_VALUE);

  const [error, setError] = useState("");

  useEffect(() => {
    if (isEdit) {
      getArticleById(id)
        .then((res) => {
          const { title, content, category } = res.data;

          setForm({
            title,
            content,
            category,
          });
        })
        .catch((err) => console.error("Error loading article:", err));
    }
  }, [id, isEdit]);

  const handleSubmit = async (status) => {
    if (form.title.trim().length < 20) {
      setError("Title minimum should be 20 characters");
      return;
    }
    if (form.content.trim().length < 200) {
      setError("Content minimum should be 200 characters");
      return;
    }
    if (form.category.trim().length < 3) {
      setError("Category minimum should be 3 characters");
      return;
    }

    const payload = { ...form, status };

    try {
      if (isEdit) {
        await updateArticle(id, payload);
      } else {
        await createArticle(payload);
      }
      navigate("/all-posts");
    } catch (err) {
      setError(err.response?.data?.error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {isEdit ? "Edit Article" : "Add New Article"}
      </h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="bg-white p-6 shadow rounded-lg border border-gray-200 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Minimum 20 characters..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            rows="8"
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="Minimum 200 characters..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <input
            type="text"
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            placeholder="Minimum 3 characters..."
          />
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={() => handleSubmit(STATUS.PUBLISH)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold cursor-pointer"
          >
            Publish
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(STATUS.DRAFT)}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 font-semibold cursor-pointer"
          >
            Draft
          </button>
        </div>
      </div>
    </div>
  );
}
