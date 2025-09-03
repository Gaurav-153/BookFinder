
export function getCoverUrl(book, size = "M") {
  if (book.cover_i) {
    return `https://covers.openlibrary.org/b/id/${book.cover_i}-${size}.jpg`;
  }
  if (book.isbn && book.isbn[0]) {
    return `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-${size}.jpg`;
  }
  
  return "https://via.placeholder.com/150x220?text=No+Cover";
}
