// src/services/openLibrary.js
export async function searchBooks(title, page = 1, limit = 12) {
  if (!title) return [];

  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
    title
  )}&page=${page}&limit=${limit}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      books: data.docs,
      total: data.numFound, 
    };
  } catch (err) {
    console.error("Error fetching books:", err);
    return { books: [], total: 0 };
  }
}
