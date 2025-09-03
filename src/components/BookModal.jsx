import { getCoverUrl } from "../utils/coverUrl";

export default function BookModal({ book, onClose }) {
  if (!book) return null;

  const authors = book.author_name ? book.author_name.join(", ") : "Unknown";

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      {/* modal box */}
      <div className="bg-white rounded-lg max-w-lg w-full p-4 relative shadow-lg">
        {/* close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ✖
        </button>

        {/* cover + info */}
        <div className="flex gap-4">
          <img
            src={getCoverUrl(book, "L")}
            alt={book.title}
            className="w-32 h-48 object-cover rounded"
          />
          <div>
            <h2 className="text-xl font-bold text-blue-700">{book.title}</h2>
            <p className="text-sm text-gray-600">{authors}</p>
            <p className="text-sm text-gray-500 mt-1">
              First published: {book.first_publish_year || "N/A"}
            </p>
            <p className="text-sm text-gray-500">
              Edition count: {book.edition_count || "N/A"}
            </p>
          </div>
        </div>

        {/* subjects */}
        <div className="mt-4">
          <h3 className="font-semibold text-gray-700">Subjects</h3>
          <p className="text-sm text-gray-600">
            {book.subject ? book.subject.slice(0, 8).join(", ") : "Not available"}
          </p>
        </div>

        {/* link */}
        <div className="mt-4">
          <a
            href={`https://openlibrary.org${book.key}`}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View on Open Library
          </a>
        </div>
      </div>
    </div>
  );
}
