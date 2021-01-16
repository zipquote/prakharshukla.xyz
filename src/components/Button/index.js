export default function Button({ children }) {
  return (
    <button className="py-1 px-3 mx-1 mb-1 border-2 border-black rounded shadow-btn relative">
      {children}
    </button>
  );
}
