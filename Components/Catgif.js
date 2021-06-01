export default function Catgif({ data, isValidating }) {
  return isValidating ? (
    <span className="text-2xl font-bold text-gray-600">Moar cats...</span>
  ) : (
    <img
      className="rounded-lg shadow-xl overflow-hidden cursor-pointer"
      src={data.images.original.url}
      alt="coolcatgif"
    />
  );
}
