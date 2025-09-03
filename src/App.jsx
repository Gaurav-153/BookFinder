import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import { searchBooks } from "./services/openLibrary";
import BookCard from "./components/BookCard";
import BookModal from "./components/BookModal";
import SkeletonCard from "./components/SkeletonCard";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // pagination
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 12;

  // dark mode
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      setBooks([]);
      setTotal(0);
      return;
    }

    setLoading(true);
    searchBooks(query, page, limit)
      .then((data) => {
        setBooks(data.books);
        setTotal(data.total);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-gray-100 relative overflow-hidden">
        
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 shadow-lg p-4 flex justify-between items-center z-10 relative">
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2 drop-shadow-md">
            📚 Book Finder
          </h1>
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-white shadow-md hover:scale-105 transition-transform"
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </header>

        {/* Floating books animation */}
        {!query && (
          <>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-12 h-12 bg-gradient-to-tr from-pink-400 to-purple-500 dark:from-blue-500 dark:to-indigo-400 rounded-full animate-bounce-slow shadow-lg"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 90}%`,
                  opacity: 0.3 + Math.random() * 0.7,
                }}
              >
                <span role="img" aria-label="book" className="text-2xl flex justify-center items-center h-full">
                  📖
                </span>
              </div>
            ))}
          </>
        )}

        {/* Main content */}
        <main className="max-w-6xl mx-auto p-6 relative z-10">
          {/* Search */}
          <SearchBar
            value={query}
            onChange={(val) => {
              setQuery(val);
              setPage(1); // reset page on new search
            }}
          />

          {/* Default landing content */}
          {!query && (
            <div className="mt-12 text-center p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 mb-4">
                Discover Your Next Favorite Book
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
                Search by title, author, or ISBN and explore thousands of books at your fingertips.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center mt-6">
                {["Stories", "Mystery", "Science", "History","Adventure","Education"].map(
                  (genre, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 rounded-xl shadow-lg bg-gradient-to-tr from-blue-400 to-purple-500 dark:from-gray-700 dark:to-gray-600 text-white font-semibold cursor-pointer hover:scale-110 transform transition-all hover:shadow-xl"
                    >
                      {genre}
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          <div className="mt-10">
            {/* Loading skeletons */}
            {loading && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            )}

            {/* No results */}
            {!loading && books.length === 0 && query && (
              <p className="text-gray-500 text-center text-lg">
                No books found for “{query}”
              </p>
            )}

            {/* Book results */}
            {!loading && books.length > 0 && (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {books.map((book) => (
                    <BookCard
                      key={book.key}
                      book={book}
                      onClick={() => setSelectedBook(book)}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {total > limit && (
                  <div className="flex justify-center items-center gap-6 mt-8">
                    <button
                      className="px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg shadow-md disabled:opacity-50 hover:scale-105 transition-transform"
                      disabled={page === 1}
                      onClick={() => setPage((p) => p - 1)}
                    >
                      ◀ Prev
                    </button>
                    <span className="font-medium">
                      Page {page} of {totalPages}
                    </span>
                    <button
                      className="px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg shadow-md disabled:opacity-50 hover:scale-105 transition-transform"
                      disabled={page === totalPages}
                      onClick={() => setPage((p) => p + 1)}
                    >
                      Next ▶
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </main>

        {/* Modal */}
        {selectedBook && (
          <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
        )}
      </div>
    </div>
  );
}

export default App;
