import { getCoverUrl } from "../utils/coverUrl";

export default function BookCard({ book, onClick }) {
  const authors = book.author_name ? book.author_name.join(", ") : "Unknown";

  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Cover */}
      <img
        src={getCoverUrl(book, "M")}
        alt={book.title}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-3">
        <h3 className="font-semibold text-sm text-blue-700 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-xs text-gray-600 truncate">{authors}</p>
        <p className="text-xs text-gray-500">
          {book.first_publish_year || "N/A"}
        </p>
      </div>
    </div>
  );
}
