import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import PostForm from "./pages/PostForm";
import Preview from "./pages/Preview";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
            <div className="font-bold text-lg text-blue-600">Dashboard</div>
            <div className="flex space-x-6 font-medium">
              <Link
                to="/all-posts"
                className="hover:text-blue-600 transition-colors"
              >
                All Posts
              </Link>
              <Link
                to="/add-new"
                className="hover:text-blue-600 transition-colors"
              >
                Add New
              </Link>
              <Link
                to="/preview"
                className="hover:text-blue-600 transition-colors"
              >
                Preview
              </Link>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<AllPosts />} />
            <Route path="/all-posts" element={<AllPosts />} />
            <Route path="/add-new" element={<PostForm />} />
            <Route path="/edit/:id" element={<PostForm />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
