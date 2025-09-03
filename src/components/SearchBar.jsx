export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search book title..."
        className="w-full p-3 rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   bg-white text-gray-900
                   dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100
                   dark:placeholder-gray-400"
      />
    </div>
  );
}
