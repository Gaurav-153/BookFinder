export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow p-3 animate-pulse">
      <div className="bg-gray-200 h-56 w-full mb-3 rounded"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
    </div>
  );
}
